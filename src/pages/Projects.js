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
      "A dynamic restaurant website built with Next.js, featuring SEO-optimized pages, a sleek UI, and secure user authentication via Firebase. The site offers fast navigation and a visually engaging experience for visitors looking to explore menus and offers.",
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
      "An interactive movie platform created with React.js and JSON data, allowing users to browse trending, top-rated, and upcoming films. It includes a smooth browsing experience with user authentication and personalized content features.",
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
      "A feature-rich e-commerce store for shoes, developed using React.js and Bootstrap. Users can browse by categories, filter products, view quick modals for product previews, and read testimonials, all wrapped in a polished and intuitive interface.",
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
      "A vibrant recipe web application that curates a diverse collection of recipes from different cuisines. Built with React.js and Firebase, it offers seamless exploration of dishes, with an adaptive layout optimized for all devices.",
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
      "A modern landing page designed to promote business services through innovative layouts and creative messaging. Developed in React, the page highlights strategies and solutions with an emphasis on clear calls to action and professional branding.",
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
      "A dedicated university landing page aimed at enhancing student engagement. Built with React.js, it features an organized component-based structure for easy scalability, and presents academic information through a clean, approachable design.",
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
