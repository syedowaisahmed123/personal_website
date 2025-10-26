import React from "react";
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiReactquery,
  SiJsonwebtokens,
  SiPython,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGodaddy,
  SiHostinger,
  SiRazorpay,
  SiGoogleplay,
  SiScrumalliance,
  SiTensorflow,
} from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";
import { FaAws } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";

const skillIcons = {
  "React.js": <SiReact className="w-5 h-5 text-[#61DBFB]" />,
  "React Native": <TbBrandReactNative className="w-5 h-5 text-[#61DBFB]" />,
  "JavaScript (ES6+)": <SiJavascript className="w-5 h-5 text-[#f0db4f]" />,
  "TypeScript": <SiTypescript className="w-5 h-5 text-[#3178c6]" />,
  "Tailwind CSS": <SiTailwindcss className="w-5 h-5 text-[#38bdf8]" />,
  "HTML5 / CSS3": (
    <>
      <SiHtml5 className="w-5 h-5 text-[#e34c26]" />
      <SiCss3 className="w-5 h-5 text-[#264de4]" />
    </>
  ),
  "Node.js": <SiNodedotjs className="w-5 h-5 text-[#68a063]" />,
  "Express.js": <SiExpress className="w-5 h-5 text-[#0075C9]" />,
  "Flask (Python)": <SiPython className="w-5 h-5 text-[#306998]" />,
  "RESTful APIs": <SiReactquery className="w-5 h-5 text-[#61dafb]" />,
  "JWT Authentication": <SiJsonwebtokens className="w-5 h-5 text-[#00bfa6]" />,
  "Role-based Access": <SiScrumalliance className="w-5 h-5 text-[#ff7f50]" />,
  "MongoDB": <SiMongodb className="w-5 h-5 text-[#4db33d]" />,
  "MySQL / SQL": <SiMysql className="w-5 h-5 text-[#4479a1]" />,
  "Git / Deployment": <SiGit className="w-5 h-5 text-[#f05032]" />,
  "AWS S3 + CloudFront": <FaAws className="w-5 h-5 text-[#ff9900]" />,
  "GoDaddy CPanel": <SiGodaddy className="w-5 h-5 text-[#1BDBDB]" />,
  "Hostinger": <SiHostinger className="w-5 h-5 text-[#673DE6]" />,
  "VS Code / Sublime Text": <BiLogoVisualStudio className="w-5 h-5 text-[#007acc]" />,
  "Razorpay Integration": <SiRazorpay className="w-5 h-5 text-[#0055ff]" />,
  "Google Play Billing": <SiGoogleplay className="w-5 h-5" />,
  "Data Science / ML": <SiTensorflow className="w-5 h-5 text-[#ff6f00]" />,
  "UI Performance": <SiReact className="w-5 h-5 text-[#00bfa6]" />,
  "Agile / Scrum": <SiScrumalliance className="w-5 h-5 text-[#ff7f50]" />,
};

const SkillCategory = ({ title, skills }) => (
  <div className="bg-[#0d1117] border border-gray-800 rounded-2xl p-5 shadow-md transform transition-all duration-300 hover:shadow-[#00bfa6]/50 hover:bg-gradient-to-br hover:from-[#0d1117] hover:via-[#0d111780] hover:to-[#161b22]">
    <h3 className="text-[#00bfa6] font-semibold text-xl mb-6 text-center border-b border-[#00bfa6]/30 pb-2 relative">
      {title}
      <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-1 w-12 h-1 bg-[#00bfa6] rounded-full animate-pulse"></span>
    </h3>
    <ul className="space-y-2 text-[#e6edf3]/90 text-sm">
      {skills.map((s, index) => (
        <li
          key={s}
          className="flex items-center gap-3 opacity-0 transform translate-y-2 hover:translate-x-1 hover:text-[#00bfa6] transition-all duration-300"
          style={{ animation: `fadeInUp 0.4s forwards ${index * 0.1}s` }}
        >
          {skillIcons[s]}
          {s}
        </li>
      ))}
    </ul>
  </div>
);

const Skills = () => (
  <section
    id="skills"
    className="relative max-w-6xl mx-auto px-6 py-20 font-mono md:-mt-10 -mt-20"
  >
    <h2 className="text-3xl font-bold text-[#00bfa6] mb-12 inline-block pb-1 relative">
      Skills
      <span className="absolute left-0 -bottom-1 w-16 h-1 bg-[#00bfa6] rounded-full animate-pulse"></span>
    </h2>

    <div
      className="
        grid 
        grid-cols-1
        sm:grid-cols-2 
        md:grid-cols-3 
        lg:grid-cols-4
        gap-6
      "
    >
      <SkillCategory
        title="Frontend"
        skills={[
          "React.js",
          "React Native",
          "JavaScript (ES6+)",
          "TypeScript",
          "Tailwind CSS",
          "HTML5 / CSS3",
        ]}
      />
      <SkillCategory
        title="Backend"
        skills={[
          "Node.js",
          "Express.js",
          "Flask (Python)",
          "RESTful APIs",
          "JWT Authentication",
        ]}
      />
      <SkillCategory
        title="Database & DevOps"
        skills={[
          "MongoDB",
          "MySQL / SQL",
          "Git / Deployment",
          "AWS S3 + CloudFront",
          "GoDaddy CPanel",
          "Hostinger",
        ]}
      />
      <SkillCategory
        title="Tools"
        skills={[
          "VS Code / Sublime Text",
          "Razorpay Integration",
          "Google Play Billing",
          "UI Performance",
          "Agile / Scrum",
        ]}
      />
    </div>

    <style>
      {`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(0.5rem);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}
    </style>
  </section>
);

export default Skills;
