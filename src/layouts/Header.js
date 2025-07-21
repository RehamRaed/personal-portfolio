import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import "../styles/Header.css";

const Header = () => {
  const [animate, setAnimate] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero");
      if (!heroSection) return;

      const heroHeight = heroSection.offsetHeight;
      const scrollPosition = window.scrollY;

      if (scrollPosition < heroHeight - 50) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`custom-header-wrapper 
        ${animate ? "slide-down" : ""}
        ${!visible ? "hide-up" : ""}
      `}
    >
      <header className="custom-header">
        <nav className="custom-nav">
          <ScrollLink to="about" smooth={true} duration={500} className="custom-link" spy={true} offset={-70}>About</ScrollLink>
          <ScrollLink to="projects" smooth={true} duration={500} className="custom-link" spy={true} offset={-70}>Projects</ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={500} className="custom-link" spy={true} offset={-70}>Contact</ScrollLink>
        </nav>
      </header>
    </div>
  );
};

export default Header;
