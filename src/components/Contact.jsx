import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto px-6 py-24 text-center -mt-20"
    >
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-[#00bfa6] mb-4">
        Let’s Build Something Great Together
      </h2>
      <p className="text-[#e6edf3]/80 mb-12 max-w-2xl mx-auto">
        I’m open to freelance, full-time, or remote opportunities. Connect with me and let's create something amazing.
      </p>

      {/* Contact Icons */}
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
        {/* Email */}
        <a
          href="mailto:syedowaisahmed821@gmail.com"
          className="flex items-center gap-2 px-4 py-3 bg-[#161b22] rounded-lg shadow-md border border-[#1e2025] hover:bg-[#00bfa6]/10 transition transform hover:scale-105"
        >
          <FaEnvelope className="text-[#00bfa6] w-6 h-6" />
          <span className="hidden md:inline text-[#e6edf3] font-mono">
            syedowaisahmed821@gmail.com
          </span>
        </a>

        {/* Phone */}
        <a
          href="tel:+919620838575"
          className="flex items-center justify-center w-12 h-12 md:w-auto md:h-auto bg-[#161b22] rounded-lg shadow-md border border-[#1e2025] hover:bg-[#00bfa6]/10 transition transform hover:scale-110"
        >
          <FaPhoneAlt className="text-[#00bfa6] w-6 h-6" />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/syed-owais-ahmed-cs-engineer"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 md:w-auto md:h-auto bg-[#161b22] rounded-lg shadow-md border border-[#1e2025] hover:bg-[#00bfa6]/10 transition transform hover:scale-110"
        >
          <FaLinkedin className="text-[#00bfa6] w-6 h-6" />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/syedowaisahmed123"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 md:w-auto md:h-auto bg-[#161b22] rounded-lg shadow-md border border-[#1e2025] hover:bg-[#00bfa6]/10 transition transform hover:scale-110"
        >
          <FaGithub className="text-[#00bfa6] w-6 h-6" />
        </a>
      </div>

    
    </section>
  );
};

export default Contact;
