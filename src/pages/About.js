import React, { useEffect, useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/About.css";
import profileImg from "../assets/profile.jpeg";

function About() {
  const titleRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  const title = "About Me";

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
    <section id="about" className="about-section">
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

      <Container className="about-container">
        <Row className="about-box">
          <Col className="about-image" lg={4}>
            <img src={profileImg} alt="Profile" />
          </Col>
          <Col className="about-info" lg={8}>
            <p>
              I am a Front-End Developer with strong expertise in HTML, CSS,
              JavaScript, Bootstrap, and Tailwind CSS. I specialize in designing
              interactive, modern, and responsive user interfaces using React
              and Next.js. I have practical experience in transforming creative
              ideas into elegant web applications, always focusing on writing
              clean code, delivering smooth user experiences, and paying close
              attention to detail. I continuously strive to develop my skills
              and look forward to contributing to inspiring tech projects that
              make a real impact.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
