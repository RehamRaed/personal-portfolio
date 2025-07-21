import React, { useState, useEffect } from "react";
import {
  FaGithub,
  FaFacebookF,
  FaWhatsapp,
  FaInstagram,
  FaLocationArrow 
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiArrowNarrowRight } from "react-icons/hi"; 
import { motion } from "framer-motion";

import "../styles/Footer.css";

function Footer () {
  const [initialY, setInitialY] = useState('-3rem'); 

  useEffect(() => {
    const updateInitialY = () => {
      const width = window.innerWidth;
      if (width <= 480) {
        setInitialY('-1.5rem'); 
      } else if (width <= 650) {
        setInitialY('-2rem'); 
      } else {
        setInitialY('-3rem'); 
      }
    };

    updateInitialY();
    window.addEventListener('resize', updateInitialY);

    return () => window.removeEventListener('resize', updateInitialY);
  }, []);

  return (
    <section className="footer-section">
      <div className="footer-text">
        <motion.h2
          initial={{ y: initialY, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            type: 'spring',
            stiffness: 80, 
            damping: 5,    
          }}
        >
          Ready to take <span>your</span> digital presence to the next level?
        </motion.h2>

        <p className="footer_p">Reach out to me today and let's discuss how I can help you achieve your goals.</p>
        <a href="https://wa.me/972593230201" target="_blank" rel="noopener noreferrer" className="border-gradient-btn" style={{marginTop:"8px"}}> 
          Let’s get in touch <span><FaLocationArrow size={14} /></span>
        </a>
      </div>

      <div className="social-media">
        <p className="follow-text">
          Follow Me On Social Media <span className="arrow-icon"><HiArrowNarrowRight size={20} color="#fff" /></span>
        </p>
        <div className="icon-circles">
          <div className="icon-circle">
            <a href="https://github.com/RehamRaed" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </div>
          <div className="icon-circle">
            <a href="https://x.com/RehamRaed03?t=KszW6im6VghE6otbwu_nsg&s=09" target="_blank" rel="noopener noreferrer">
              <FaXTwitter />
            </a>
          </div>
          <div className="icon-circle">
            <a href="https://www.facebook.com/profile.php?id=100012351940033" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
          </div>
          <div className="icon-circle">
            <a href="https://wa.me/972593230201" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </a>
          </div>
          <div className="icon-circle">
            <a href="https://www.instagram.com/reham_raed03/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="grid-overlay2">
        {[...Array(400)].map((_, index) => (
          <div key={index} className="grid-square2"></div>
        ))}
      </div>
    </section>
  );
};

export default Footer;
