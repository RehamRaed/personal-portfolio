import React, { useEffect, useState, useRef } from "react";
import { Row, Col, Container } from "react-bootstrap";
import "../styles/Skills.css";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaMobileAlt, FaGitAlt, FaBrush, FaBolt, FaSearch, FaArrowCircleUp } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiBootstrap } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "React.js", icon: <FaReact /> },
  { name: "Responsive Design", icon: <FaMobileAlt /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Styled Components", icon: <FaBrush /> },
  { name: "Bootstrap", icon: <SiBootstrap /> },
  { name: "Git & Github", icon: <FaGitAlt /> },
  { name: "Framer Motion", icon: <FaBolt /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "SEO Best Practices", icon: <FaSearch /> }
];

const rows = [];
for (let i = 0; i < skills.length; i += 4) {
  rows.push(skills.slice(i, i + 4));
}

function Skills() {
  const titleRef = useRef(null);
  const [animate, setAnimate] = useState(false);
  const title = "My Skills";

  useEffect(() => {
    function handleScroll() {
      if (!titleRef.current) return;
      const top = titleRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (top < windowHeight - 100) {
        setAnimate(true);
        window.removeEventListener("scroll", handleScroll);
      }
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="skills-section">
      <Container className="skills-container">
        <h2 ref={titleRef} className={`animated-title ${animate ? "show" : ""}`}>
          {title.split("").map((char, i) => (
            <span
              key={i}
              style={{ animationDelay: `${i * 0.08}s` }}
              className="animated-char"
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h2>
        {rows.map((row, idx) => (
          <Row key={idx} className="justify-content-center mt-4 ">
            {row.map(({ name, icon }, i) => (
              <Col key={i} xs={6} sm={6} md={3} className="d-flex justify-content-center position-relative mb-4">
                <div className="icon_wrapper">{icon}</div>
                <div className="skill-box">
                  <div className="animated-border"></div>
                  <div className="skill-name">{name}</div>
                </div>
              </Col>
            ))}
          </Row>
        ))}
      </Container>
    </section>
  );
}

export default Skills;
