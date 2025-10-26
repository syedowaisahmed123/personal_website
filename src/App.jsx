import React, { useState } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Experience from "./components/Experience";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Navbar onMenuToggle={setMenuOpen} menuOpen={menuOpen} />

      {/* Main content with smooth blur */}
      <main
        className={`pt-20  duration-50 ease-in-out ${
          menuOpen ? "blur-sm" : "blur-0"
        }`}
      >
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      <footer
        className={`text-center py-6 text-[#e6edf3]/60 border-t border-[#161b22] transition-[filter] duration-300 ease-in-out ${
          menuOpen ? "blur-sm" : "blur-0"
        }`}
      >
        <p>© {new Date().getFullYear()} Syed Owais Ahmed </p>
      </footer>
    </>
  );
};

export default App;
