import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaGithub, FaLinkedin, FaDownload, FaEnvelope } from "react-icons/fa";
import TypingEffect from "./TypingEffect";

const About = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check screen width to adjust AOS animation type
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);

    // Initialize AOS
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out",
      offset: 80,
    });

    // Fetch GitHub avatar
    const fetchGitHubImage = async () => {
      try {
        const res = await fetch("https://api.github.com/users/syedowaisahmed123");
        if (!res.ok) throw new Error("GitHub user not found");
        const data = await res.json();
        setImageUrl(data.avatar_url);
      } catch (err) {
        console.error("Error fetching GitHub image:", err);
      }
    };

    fetchGitHubImage();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Resume download link from Google Drive
  const resumeDownloadLink =
    "https://drive.google.com/uc?export=download&id=1ZuFsd9CMj528pk4u5dTEl_b1auyGXUwL";

  return (
    <section
      id="about"
      className="max-w-6xl mx-auto px-6 py-24 md:-mt-10 -mt-20 flex flex-col md:flex-row items-center md:items-start gap-12 overflow-hidden"
    >
      {/* Profile Image */}
      <div
        className="relative w-52 h-52 md:w-60 md:h-60 rounded-full overflow-hidden order-1 md:order-none"
        data-aos={isMobile ? "fade-up" : "fade-right"}
      >
        <div className="absolute inset-0 rounded-full border-4 border-[#00bfa6] animate-rotateBorder before:absolute before:inset-0 before:rounded-full before:border-4 before:border-[#00bfa6]/70 before:blur-md before:animate-pulse"></div>
        {imageUrl ? (
          <img
            src={imageUrl}
            alt="GitHub Avatar"
            className="rounded-full w-full h-full object-cover shadow-lg shadow-[#00bfa6]/30"
          />
        ) : (
          <div className="w-full h-full rounded-full bg-gray-700 animate-pulse"></div>
        )}
      </div>

      {/* Text Section */}
      <div
  className="flex-1 text-center md:text-left order-2"
  data-aos={isMobile ? "fade-up" : "fade-left"}
  data-aos-delay="150"
>
  <h2 className="relative text-4xl font-mono text-[#00bfa6] mb-8 tracking-wide">
    About Me
    <span className="absolute left-1/2 md:left-0 -bottom-2 w-24 h-1 bg-[#00bfa6] rounded-full transform -translate-x-1/2 md:translate-x-0 animate-pulse"></span>
  </h2>

  {/* Short and impactful intro */}
  <p className="leading-relaxed text-[#e6edf3]/90 text-lg mb-4 font-mono">
    Hi 👋 I’m <strong>Syed Owais Ahmed</strong>
    <span className="text-xl md:text-2xl font-mono mb-6 text-[#e6edf3] flex justify-center md:justify-start">
      a&nbsp;<TypingEffect />
    </span>
  </p>

  <p className="leading-relaxed text-[#e6edf3]/90 mb-4 -mt-4">
    passionate about building fast, secure, and scalable web applications using modern technologies.
  </p>

  <p className="leading-relaxed text-[#e6edf3]/90 mb-4">
    My focus is on crafting <strong className="text-[#00bfa6]">clean and intuitive UI</strong>, implementing <strong className="text-[#00bfa6]">smart and maintainable logic</strong>, and delivering <strong className="text-[#00bfa6]">data-driven solutions</strong>. Currently, I’m exploring <strong className="text-[#00bfa6]">Data Science</strong> to combine web engineering with intelligent systems.
  </p>

  <p className="leading-relaxed text-[#e6edf3]/90 mb-8">
    Always eager to take on new challenges, collaborate on exciting projects, and contribute to innovative solutions 🚀
  </p>

  {/* Desktop Buttons */}
  <div className="hidden md:flex justify-start gap-6" data-aos="fade-up" data-aos-delay="150">
    {/* GitHub */}
    <a
      href="https://github.com/syedowaisahmed123"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-5 py-3 text-[#00bfa6] border border-[#00bfa6] rounded-lg font-semibold hover:bg-[#00bfa6] hover:text-black transition-all duration-300 shadow-md shadow-[#00bfa6]/30"
    >
      <FaGithub size={22} />
      GitHub
    </a>

    {/* LinkedIn */}
    <a
      href="https://www.linkedin.com/in/syedowaisahmed123"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-5 py-3 text-[#00bfa6] border border-[#00bfa6] rounded-lg font-semibold hover:bg-[#00bfa6] hover:text-black transition-all duration-300 shadow-md shadow-[#00bfa6]/30"
    >
      <FaLinkedin size={22} />
      LinkedIn
    </a>

    {/* Resume Download */}
    <a
      href={resumeDownloadLink}
      download
      className="flex items-center gap-2 px-5 py-3 text-[#00bfa6] border border-[#00bfa6] rounded-lg font-semibold hover:bg-[#00bfa6] hover:text-black transition-all duration-300 shadow-md shadow-[#00bfa6]/30"
    >
      <FaDownload size={20} />
      Resume
    </a>
  </div>

  {/* Mobile Buttons */}
  <div className="flex md:hidden flex-col items-center mt-6 space-y-4" data-aos="fade-up" data-aos-delay="400">
    {/* Resume Download */}
    <a
      href={resumeDownloadLink}
      download
      className="flex items-center gap-2 px-5 py-3 text-[#00bfa6] border border-[#00bfa6] rounded-lg font-semibold hover:bg-[#00bfa6] hover:text-black transition-all duration-300 shadow-md shadow-[#00bfa6]/30 animate-pulse"
    >
      <FaDownload size={18} />
      Resume
    </a>

    {/* Social + Email */}
    <div className="flex justify-center gap-6">
      <a
        href="https://github.com/syedowaisahmed123"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#00bfa6] hover:text-white text-3xl transition-colors duration-300"
        aria-label="GitHub"
      >
        <FaGithub />
      </a>

      <a
        href="https://www.linkedin.com/in/syedowaisahmed123"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#00bfa6] hover:text-white text-3xl transition-colors duration-300"
        aria-label="LinkedIn"
      >
        <FaLinkedin />
      </a>

      <a
        href="mailto:syedowaisahmed123@gmail.com"
        className="text-[#00bfa6] hover:text-white text-3xl transition-colors duration-300"
        aria-label="Email"
      >
        <FaEnvelope />
      </a>
    </div>
  </div>
</div>


      {/* Custom Rotating Border Animation */}
      <style jsx>{`
        @keyframes rotateBorder {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .animate-rotateBorder {
          animation: rotateBorder 6s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default About;
