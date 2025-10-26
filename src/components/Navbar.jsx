import React, { useState, useEffect, useRef } from "react";

const Navbar = ({ onMenuToggle, menuOpen }) => {
  const [displayedName, setDisplayedName] = useState("");
  const [displayedTitle, setDisplayedTitle] = useState(""); // subtitle typing
  const fullName = "SYED OWAIS AHMED";
  const title = "CS Engineer/Full Stack Developer";
  const [showCursor, setShowCursor] = useState(true);
  const menuRef = useRef(null);
  const navbarRef = useRef(null); // To reference the entire navbar

  const toggleMenu = () => {
    onMenuToggle(!menuOpen);
  };

  // Name typing effect
  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullName.length) {
        setDisplayedName(fullName.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);

        // Start typing subtitle after name finishes
        let titleIndex = 0;
        const titleInterval = setInterval(() => {
          if (titleIndex < title.length) {
            setDisplayedTitle(title.slice(0, titleIndex + 1));
            titleIndex++;
          } else {
            clearInterval(titleInterval);
          }
        }, 30); // slightly faster typing for subtitle
      }
    }, 100);
    return () => clearInterval(typingInterval);
  }, []);

  // Blinking cursor
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  // Close the menu if click is outside of the navbar or menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current && !menuRef.current.contains(event.target) &&
        navbarRef.current && !navbarRef.current.contains(event.target)
      ) {
        onMenuToggle(false); // Close the menu
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [onMenuToggle]);

  const navItems = ["About", "Skills","Experience", "Projects", "Certifications", "Contact"];

  return (
    <nav ref={navbarRef} className="fixed w-full top-0 left-0 bg-[#161b22]/90 backdrop-blur-lg z-50 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4 relative">
        {/* Typing Name with Cursor */}
        <h1 className="text-[#00bfa6] md:text-3xl text-xl font-bold tracking-wide font-mono relative">
          <span>{displayedName}</span>
          <span
            className={`inline-block w-1 ml-1 bg-[#00bfa6] transition-opacity duration-300 ${showCursor ? "opacity-100" : "opacity-0"
              }`}
          />
          {/* Fixed position subtitle */}
          <span className="block md:text-[14px] text-[9px] text-[#e6edf3]/80 mt-1 font-mono h-[1rem]">
            {displayedTitle}
          </span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-[#e6edf3] font-mono">
          {navItems.map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="hover:text-[#00bfa6] text-xl">
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none z-50"
          aria-label="Toggle menu"
        >
          <div className="space-y-1">
            <span
              className={`block h-0.5 w-6 bg-[#F3DD73] transform transition duration-300 ${menuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
            />
            <span
              className={`block h-0.5 w-6 bg-[#F3DD73] transition duration-300 ${menuOpen ? "opacity-0" : "opacity-100"
                }`}
            />
            <span
              className={`block h-0.5 w-6 bg-[#F3DD73] transform transition duration-300 ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
            />
          </div>
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            ref={menuRef}
            className="absolute top-16 left-0 w-full bg-[#161b22] flex flex-col items-center space-y-4 py-6 md:hidden z-50"
          >
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => onMenuToggle(false)}
                className="text-[#e6edf3] hover:text-[#00bfa6]"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
