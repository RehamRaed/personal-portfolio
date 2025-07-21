import React, { useEffect, useState } from "react";
 import { FaLocationArrow } from "react-icons/fa";
import "../styles/Hero.css";

function Hero() {
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const squares = document.querySelectorAll(".grid-square");

    const interval = setInterval(() => {
      squares.forEach(square => square.classList.remove("active"));
      const randomSquares = Array.from({ length: 20 }, () =>
        Math.floor(Math.random() * squares.length)
      );
      randomSquares.forEach(i => {
        squares[i].classList.add("active");
      });
    }, 5000);

    const t1 = setTimeout(() => setShowSubtitle(true), 500);
    const t2 = setTimeout(() => setShowTitle(true), 300);
    const t3 = setTimeout(() => setShowDescription(true), 700);
    const t4 = setTimeout(() => setShowButtons(true), 900);

    return () => {
      clearInterval(interval);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="light-overlay"></div>
   
      <div className="hero-content">
        <p className={`subtitle ${showSubtitle ? "show" : ""}`}>
          CRAFTING DIGITAL EXPERIENCES WITH MODERN WEB TECH
        </p>

        <h1 className={`title ${showTitle ? "show" : ""}`}>
          First impressions last <br className="responsive-br" /> so <span className="highlight">make it count</span>
        </h1>

        <p className={`description ${showDescription ? "show" : ""}`}>
          Hi! I'm Reham, a Front-End Developer with React & Next.js
        </p>

       <div className={`buttons ${showButtons ? "show" : ""}`}>
  <a
  href="/cv.pdf"
  download
  className="btn fancy-border"
>
  Download CV <FaLocationArrow size={13} />
</a>

  <a
    href="https://github.com/RehamRaed"
    target="_blank"
    rel="noopener noreferrer"
    className="btn fancy-border"
  >
    Show my work <FaLocationArrow size={13} />
  </a>
</div>
      </div>

      <div className="grid-overlay">
        {[...Array(400)].map((_, index) => (
          <div key={index} className="grid-square"></div>
        ))}
      </div>
    </section>
  );
}

export default Hero;
