import React, { useState, useRef, useEffect } from "react";
import {
  FaExternalLinkAlt,
  FaCheckCircle,
  FaCode,
  FaCloud,
  FaTasks,
  FaBookOpen,
} from "react-icons/fa";

const projects = [
  {
    title: "Vocasta (Listing & Reading Platform)",
    tech: "MERN Stack | Razorpay | JWT Auth",
    points: [
      "Integrated ebooks & audiobooks in a single platform with progress tracking.",
      "Implemented JWT-based login with refresh tokens for persistent sessions.",
      "Enabled annotations, highlights, and notes linking directly to EPUB locations.",
      "Integrated Razorpay for subscription and one-time payments.",
      "Designed unified dashboard for content, payments, and profiles.",
    ],
    icon: <FaBookOpen className="text-[#00bfa6] text-3xl" />,
    link: "https://vocasta.com",
  },
  {
    title: "Trainerworldpvtltd (E-Learning Platform)",
    tech: "MERN Stack | AWS S3 / CloudFront",
    points: [
      "Developed full-featured e-learning system with admin & user modules.",
      "Integrated AWS S3 for multi-part video uploads and metadata management.",
      "Enabled quizzes, progress tracking, and auto certificate generation.",
      "Used CloudFront CDN for fast, low-latency video streaming.",
      "Integrated Razorpay for secure course payments.",
    ],
    icon: <FaCloud className="text-[#00bfa6] text-3xl" />,
    link: "https://trainersworldpvtltd.com",
  },
  {
    title: "SuccessRunway (Task & Notification System)",
    tech: "MERN Stack | Real-time Alerts",
    points: [
      "Task management and meeting alert system for admins & users.",
      "Built real-time notification modal ensuring no meeting is missed.",
      "Enabled image upload proof for task completion workflow.",
      "Created separate dashboards for today, upcoming, and completed tasks.",
      "Optimized UI for seamless communication and task tracking.",
    ],
    icon: <FaTasks className="text-[#00bfa6] text-3xl" />,
    link: "https://successrunway.org",
  },
  {
    title: "SLT Landing Page",
    tech: "HTML | CSS | JavaScript",
    points: [
      "Responsive site for tailoring services.",
      "Smooth scrolling and modern animations.",
      "Optimized for mobile-first performance and design clarity.",
    ],
    icon: <FaCode className="text-[#00bfa6] text-3xl" />,
    link: "https://syedowaisahmed123.github.io/Landing_page",
  },
];

const ProjectCard = ({ project, onReadMore }) => {
  const pointsToShow = project.points.slice(0, 1); // show first 2 points

  return (
    <div className="bg-[#161b22] flex flex-col justify-between p-6 rounded-xl border border-[#1e2025] shadow-md hover:shadow-[#00bfa6]/30 transition-all duration-300 hover:-translate-y-1">
      <div>
        <div className="flex items-center gap-3 mb-3">
          {project.icon}
          <h3 className="text-xl font-semibold text-[#e6edf3]">{project.title}</h3>
        </div>
        <p className="text-sm text-[#00bfa6] mb-4">{project.tech}</p>

        <ul className="space-y-2 text-[#e6edf3]/80 text-sm">
          {pointsToShow.map((point, idx) => (
            <li key={idx} className="flex gap-2 items-start">
              <span className="flex-shrink-0 mt-1.5 text-[#00bfa6]">
                <FaCheckCircle className="text-[0.8rem]" />
              </span>
              <span className="leading-relaxed">{point}</span>
            </li>
          ))}
        </ul>
      </div>

      {project.points.length > 2 && (
        <button
          onClick={() => onReadMore(project)}
          className="ml-0 mt-4 text-[#00bfa6] font-medium hover:underline self-start"
        >
          Read more...
        </button>
      )}

      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#00bfa6] mt-6 inline-flex items-center gap-2 font-medium hover:underline"
      >
        Visit Site <FaExternalLinkAlt className="text-xs" />
      </a>
    </div>
  );
};

const Modal = ({ project, onClose }) => {
  const modalRef = useRef();

  // Close modal on click outside
  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  useEffect(() => {
    if (!project) return; // only disable scroll if modal is open

    document.body.style.overflow = "hidden";
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [project]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
      <div
        ref={modalRef}
        className="bg-[#161b22] p-8 rounded-xl md:max-w-xl md:w-full w-11/12 max-h-[90vh] overflow-y-auto relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#00bfa6] font-bold text-lg"
        >
          ×
        </button>
        <h3 className="text-2xl font-semibold text-[#e6edf3] mb-4">{project.title}</h3>
        <p className="text-sm text-[#00bfa6] mb-4">{project.tech}</p>
        <ul className="space-y-2 text-[#e6edf3]/80 text-sm">
          {project.points.map((point, idx) => (
            <li key={idx} className="flex gap-2 items-start">
              <span className="flex-shrink-0 mt-1.5 text-[#00bfa6]">
                <FaCheckCircle className="text-[0.8rem]" />
              </span>
              <span className="leading-relaxed">{point}</span>
            </li>
          ))}
        </ul>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#00bfa6] mt-6 inline-flex items-center gap-2 font-medium hover:underline"
        >
          Visit Site <FaExternalLinkAlt className="text-xs" />
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-24 -mt-20">
      <h2 className="relative text-3xl font-bold text-[#00bfa6] mb-12 inline-block">
        Projects
        <span className="absolute left-0 -bottom-1 w-20 h-1 bg-[#00bfa6] rounded-full animate-pulse"></span>
      </h2>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
            onReadMore={setSelectedProject}
          />
        ))}
      </div>

      <Modal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};

export default Projects;
