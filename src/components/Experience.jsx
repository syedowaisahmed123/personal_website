import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaCode, FaBrain, FaServer, FaLaptopCode, FaTimes } from "react-icons/fa";

const experiences = [
  {
    title: "Full Stack Developer (Full-Time)",
    company: "Sudarshan Group of Company",
    icon: <FaLaptopCode className="text-[#00bfa6]" size={24} />,
    description: [
      "Developed and deployed MERN + Flask applications with secure JWT authentication and role-based dashboards.",
      "Integrated Razorpay for subscriptions and real-time webhook handling.",
      "Implemented Amazon S3 CRUD operations with CloudFront CDN for efficient media delivery.",
      "Built reusable React components, optimized UI with hooks, Context API, and lazy loading.",
      "Delivered 3+ production systems with smooth UX and high performance.",
    ],
  },
  {
    title: "Data Science Intern",
    company: "AI Variant",
    icon: <FaServer className="text-[#00bfa6]" size={24} />,
    description: [
      "Explored supervised and unsupervised machine learning algorithms for predictive analytics.",
      "Trained and evaluated models on real-world datasets using Scikit-learn, Pandas, and Matplotlib.",
      "Learned how to split data into training and test sets, fine-tune algorithms, and compare model performance.",
      "Currently working on a new project involving model development and deployment — an Attorney Insurance Claim Prediction system using Logistic Regression, which will be showcased soon in the Projects section.",
    ],
  },
  {
    title: "Web Developer Intern",
    company: "VeriTech IT Software Services",
    icon: <FaCode className="text-[#00bfa6]" size={24} />,
    description: [
      "Built responsive front-end landing pages using HTML, JavaScript, and Tailwind CSS.",
      "Improved design responsiveness and accessibility.",
      "Learned best coding and deployment practices in a team setting.",
      "Created the STL Landing Page which was showcased in the project section.",
    ],
  },
  {
    title: "Intern - Data Science & Analytics using Python",
    company: "IETE (in association with Pantech E-Learning)",
    icon: <FaBrain className="text-[#00bfa6]" size={24} />,
    description: [
      "Learned data preprocessing and visualization with Pandas and Matplotlib.",
      "Performed EDA in Jupyter Notebook.",
      "Tested and evaluated predefined ML models for predictions.",
    ],
  },
];

const Experience = () => {
  const [selectedExp, setSelectedExp] = useState(null);

  // ✅ Disable scroll when modal is open
  useEffect(() => {
    if (selectedExp) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedExp]);

  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 py-24">
      {/* ✅ Title aligned to start */}
      <h2 className="text-4xl font-bold text-[#00bfa6] mb-12 relative text-left">
        Experience
        <span className="absolute left-0 -bottom-2 w-28 h-1 bg-[#00bfa6] rounded-full animate-pulse"></span>
      </h2>

      {/* Timeline */}
      <div className="relative border-l-2 border-[#00bfa6]/40 pl-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="mb-10 relative"
          >
            {/* Dot */}
            <div className="absolute -left-[13px] w-6 h-6 bg-[#0d1117] border-2 border-[#00bfa6] rounded-full flex items-center justify-center">
              {exp.icon}
            </div>

            {/* Content */}
            <div className="bg-[#161b22] border border-[#1e2025] rounded-xl p-5 shadow-md hover:shadow-[#00bfa6]/30 transition-all duration-300">
              <h3 className="text-xl font-semibold text-[#e6edf3] flex items-center gap-2">
                {exp.title}
              </h3>
              <p className="text-[#00bfa6]/80 font-medium mb-3">{exp.company}</p>
              <p className="text-sm text-[#e6edf3]/70">
                {exp.description[0]} {/* short preview */}
              </p>

              <button
                onClick={() => setSelectedExp(exp)}
                className="mt-3 text-sm text-[#00bfa6] hover:underline font-medium"
              >
                Read more →
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {selectedExp && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedExp(null)}
        >
          <div
            className="bg-[#161b22] border border-[#00bfa6]/30 rounded-xl p-8 max-w-lg w-full relative overflow-y-auto max-h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-4 text-[#00bfa6] text-2xl hover:text-[#00ffcc]"
              onClick={() => setSelectedExp(null)}
            >
              <FaTimes />
            </button>

            <div className="flex items-center gap-3 mb-4">
              {selectedExp.icon}
              <div>
                <h3 className="text-2xl font-semibold text-white">
                  {selectedExp.title}
                </h3>
                <p className="text-[#00bfa6]/80 font-medium">
                  {selectedExp.company}
                </p>
              </div>
            </div>

            <ul className="space-y-2 text-[#e6edf3]/80 text-sm">
              {selectedExp.description.map((line, idx) => (
                <li key={idx} className="leading-relaxed">
                  • {line}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
};

export default Experience;
