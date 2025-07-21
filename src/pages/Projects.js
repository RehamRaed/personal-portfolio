import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/Projects.css";

import project1 from "../../src/assets/project1.png";
import project2 from "../../src/assets/project2.png";
import project3 from "../../src/assets/project3.png";
import project4 from "../../src/assets/project4.png";
import project5 from "../../src/assets/project5.png";
import project6 from "../../src/assets/project6.png";
import {
  SiJavascript,
  SiNextdotjs,
  SiHtml5,
  SiTailwindcss,
  SiReact,
  SiCss3,
  SiBootstrap,
} from "react-icons/si";
import { HiArrowNarrowRight } from "react-icons/hi";

const projects = [
  {
    id: 1,
    title: "Project One",
    image: project1,
    description:
      "A modern, responsive restaurant website built with Next.js, React, Tailwind CSS, and Firebase Authentication. It features an attractive interface, fast performance, SEO-optimized pages, and secure login. ",
    repoLink: "https://github.com/RehamRaed/resturant.git",
    demoLink: "https://onlineresturant.vercel.app/",
    icons: [
      <SiJavascript size={25} color="#f7df1e" />,
      <SiNextdotjs size={25} color="#000000" />,
      <SiHtml5 size={25} color="#e34f26" />,
      <SiTailwindcss size={25} color="#06b6d4" />,
      <SiReact size={25} color="#61dafb" />,
    ],
  },
  {
    id: 2,
    title: "Project Two",
    image: project2,
    description:
      "A responsive and stylish movies website built with React.js and JSON data. Users can explore popular, top-rated, and upcoming films through a smooth, modern interface, with user registration and login handled via Firebase Authentication.",
    repoLink: "https://github.com/RehamRaed/movie-explorer.git",
    demoLink: "https://movie-explorer-iota-jade.vercel.app/",
    icons: [
      <SiReact size={20} color="#61dafb" />,
      <SiJavascript size={20} color="#f7df1e" />,
      <SiHtml5 size={20} color="#e34f26" />,
      <SiCss3 size={20} color="#1572B6" />,
    ],
  },
  {
    id: 3,
    title: "Project Three",
    image: project3,
    description:
      "A modern, fully responsive e-commerce site built with React.js and Bootstrap. It features category browsing, product filtering, elegant modals for product previews, and a testimonials section — all designed for a smooth user experience on any device.",
    repoLink: "https://github.com/RehamRaed/Online_Shoes_Shop.git",
    demoLink: "https://online-shoes-shop.vercel.app/",
    icons: [
      <SiReact size={20} color="#61dafb" />,
      <SiJavascript size={20} color="#f7df1e" />,
      <SiHtml5 size={20} color="#e34f26" />,
      <SiCss3 size={20} color="#1572B6" />,
      <SiBootstrap size={20} color="#563D7C" />,
    ],
  },
  {
    id: 4,
    title: "Project Four",
    image: project4,
    description:
      "A responsive and modern web application for browsing recipes from various cuisines, built with React.js and Firebase . It features an interactive user experience and adapts seamlessly to all screen sizes ",
    repoLink: "https://github.com/RehamRaed/Recipes_Website.git",
    demoLink: "https://your-recipesguide.vercel.app/",
    icons: [
      <SiReact size={20} color="#61dafb" />,
      <SiJavascript size={20} color="#f7df1e" />,
      <SiHtml5 size={20} color="#e34f26" />,
      <SiCss3 size={20} color="#1572B6" />,
      <SiBootstrap size={20} color="#563D7C" />,
    ],
  },
  {
    id: 5,
    title: "Project Five",
    image: project5,
    description:
      "modern and fully responsive landing page built with React. It showcases a business promotion service with creative strategies and innovative solutions. The design is clean, user-friendly, and adapts ",
    repoLink: "https://github.com/RehamRaed/business-project.git",
    demoLink: "https://business-project-alpha.vercel.app/",
    icons: [
      <SiReact size={20} color="#61dafb" />,
      <SiJavascript size={20} color="#f7df1e" />,
      <SiHtml5 size={20} color="#e34f26" />,
      <SiCss3 size={20} color="#1572B6" />,
      <SiBootstrap size={20} color="#563D7C" />,
    ],
  },
  {
    id: 6,
    title: "Project Six",
    image: project6,
    description:
      "A landing page for a university that aims to provide students with a smooth digital experience through an attractive and user-friendly interface. The page was developed using React.js with a modular component structure to ensure scalability and maintainability. ",
    repoLink: "https://github.com/RehamRaed/University_Website.git",
    demoLink: "https://university-sigma-eight.vercel.app/",
    icons: [
      <SiReact size={20} color="#61dafb" />,
      <SiJavascript size={20} color="#f7df1e" />,
      <SiHtml5 size={20} color="#e34f26" />,
      <SiCss3 size={20} color="#1572B6" />,
    ],
  },
];

const iconContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const iconVariants = {
  hidden: { opacity: 0, x: -20, scale: 1, transformOrigin: "center" },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transformOrigin: "center",
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const titleRef = useRef(null);
  const [animate, setAnimate] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const t4 = setTimeout(() => setShowButtons(true), 400);

  const title = "My Projects";

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

  const ref = React.useRef(null);
  useInView(ref, { once: true });

  return (
    <section id="projects" ref={ref} className="projects-section">
      <Container className="projects-container">
        <h2
          ref={titleRef}
          className={`animated-title ${animate ? "show" : ""}`}
          style={{ marginBottom: "2rem" }}
        >
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

        <Row className="g-4">
          {projects.map((project, index) => (
            <Col key={project.id} md={6} sm={12}>
              {/* الكارد */}
              <div
                className="project-card"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="image-container">
                  <div
                    className="background-image"
                    style={{
                      backgroundImage: `url(${project.image})`,
                    }}
                  ></div>

                  <div
                    className={`hover-content ${
                      hoveredIndex === index ? "show" : ""
                    }`}
                  >
                    <div className="links">
                      <a
                        href={project.repoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pulse-btn"
                      >
                        GitHub
                      </a>
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pulse-btn"
                      >
                        Demo
                      </a>
                    </div>
                    <motion.div
                      className="icons"
                      variants={iconContainerVariants}
                      initial="hidden"
                      animate={hoveredIndex === index ? "visible" : "hidden"}
                      style={{ display: "flex", gap: "12px" }}
                    >
                      {project.icons.map((icon, i) =>
                        typeof icon === "string" ? (
                          <motion.i
                            key={i}
                            className={icon}
                            variants={iconVariants}
                            style={{
                              background: "#fff",
                              color: "#000",
                              borderRadius: "50%",
                              padding: "5px",
                              fontSize: "1.2rem",
                            }}
                          />
                        ) : (
                          <motion.div
                            key={i}
                            variants={iconVariants}
                            style={{
                              padding: "5px",
                              fontSize: "1.2rem",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              overflow: "visible",
                            }}
                          >
                            {icon}
                          </motion.div>
                        )
                      )}
                    </motion.div>
                  </div>
                </div>

                <div className="card-description">{project.description}</div>
              </div>
            </Col>
          ))}
        </Row>
        <a
          href="https://github.com/RehamRaed"
          target="_blank"
          rel="noopener noreferrer"
          className="border-gradient-btn"
        >
          Show All Projects <HiArrowNarrowRight size={20} color="#fff" />
        </a>
      </Container>
    </section>
  );
}
