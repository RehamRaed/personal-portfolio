import React, { useEffect, useRef, useState } from 'react';
import '../styles/Contact.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const titleRef = useRef(null);
  const [animate, setAnimate] = useState(false);
  const [visibleCount, setVisibleCount] = useState(0);
  const [statusMessage, setStatusMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

  const title = "Contact Me";

  const inputs = [
    { label: 'Name', type: 'text', placeholder: 'Your Name' },
    { label: 'Email', type: 'email', placeholder: 'Your Email' },
    { label: 'Message', type: 'textarea', placeholder: 'Your Message' },
  ];

  const contactDetails = [
  { 
    label: 'Phone', 
    icon: <FiPhone size={25} color='#b88bfa' />, 
    text: '+972 593230201',
    link: 'https://wa.me/972593230201'  
  },
  { 
    label: 'Email', 
    icon: <FiMail size={25} color='#b88bfa' />, 
    text: 'rehammagharee003@gmail.com',
    link: 'mailto:rehammagharee003@gmail.com'  
  },
  { 
    label: 'Location', 
    icon: <FiMapPin size={25} color='#b88bfa' />, 
    text: 'Gaza, Palestine',
  },
];


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

  useEffect(() => {
    if (!animate) return;
    let current = 0;
    const interval = setInterval(() => {
      current++;
      setVisibleCount(current);
      if (current === inputs.length + 1) {
        clearInterval(interval);
      }
    }, 250);

    return () => clearInterval(interval);
  }, [animate]);

  const validate = () => {
    const errors = {};
    if (!formData.name) errors.name = true;
    if (!formData.email) errors.email = true;
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = true;
    if (!formData.message) errors.message = true;

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (isSubmitted) {
      setErrors(prev => ({ ...prev, [name]: !value }));
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    if (!validate()) return;

    emailjs.send(
      'service_2e0mkon',
      'template_fafqi78',
      {
        name: formData.name,
        email: formData.email,
        message: formData.message
      },
      'ZY8Fgh6unaD0nAiH2'
    )
     .then(() => {
  setStatusMessage('success');
  setAlertVisible(true);
  setFormData({ name: '', email: '', message: '' });
  setErrors({});
  setIsSubmitted(false);
})
.catch(() => {
  setStatusMessage('error');
  setAlertVisible(true);
});

  };

  const closeAlert = () => {
  setAlertVisible(false);
  setTimeout(() => setStatusMessage(''), 500); 
};

  return (
    <section id="contact" className="contact-section">
      <Container className="contact-container">
        {statusMessage && (
  <div className="alert-overlay">
    <div className={`status-alert ${statusMessage} ${alertVisible ? '' : 'hide'}`}>

      <button className="close-alert-btn" onClick={closeAlert}>×</button>
      {statusMessage === 'success' ? (
        <>
          <p>Message sent successfully!</p>
          <small>I will get back to you as soon as possible.</small>
        </>
      ) : (
        <p>Failed to send message. Please try again later.</p>
      )}
    </div>
  </div>
)}


        <h2 ref={titleRef} className={`animated-title ${animate ? "show" : ""}`}>
          {title.split("").map((char, i) => (
            <span key={i} style={{ animationDelay: `${i * 0.08}s` }} className="animated-char">
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h2>

        <Row>
          <Col md={6} className='f-col'>
            <p className="contact-para">Feel free to reach out to me anytime!</p>
            <div className="details-box">
              {contactDetails.map((detail, index) => (
  <div key={index} className="detail-item">
    <div className='icon-container'>
      <span className="detail-icon">{detail.icon}</span>
    </div>
    <div style={{ display: "flex", flexDirection: "column", textAlign: "start" }}>
      <span className="detail-label">{detail.label}</span>
       {detail.link ? (
        <a href={detail.link} target="_blank" rel="noopener noreferrer" className="detail-link">
          {detail.text}
        </a>
      ) : (
        <span>{detail.text}</span>
      )}
    </div>
  </div>
))}

            </div>
          </Col>

          <Col md={6} className='s-col'>
            <form onSubmit={sendEmail} className="inputs-box" noValidate>
              {inputs.map((input, index) => {
                const fieldName = input.label.toLowerCase();
                const hasError = errors[fieldName];

                return (
                  <div
                    key={index}
                    className={`input-wrapper ${visibleCount > index ? "visible" : "hidden"}`}
                    style={{ transitionDelay: `${index * 250}ms`, marginBottom: '10px' }}
                  >
                    {input.type === 'textarea' ? (
                      <textarea
                        placeholder={input.placeholder}
                        rows="3"
                        className="input-field"
                        name={fieldName}
                        value={formData[fieldName]}
                        onChange={handleChange}
                        style={{height:"150px"}}
                      ></textarea>
                    ) : (
                      <input
                        type={input.type}
                        placeholder={input.placeholder}
                        className="input-field"
                        name={fieldName}
                        value={formData[fieldName]}
                        onChange={handleChange}
                      />
                    )}

                    {isSubmitted && hasError && (
                      <AiOutlineCloseCircle className="input-icon invalid-icon" />
                    )}
                  </div>
                );
              })}
              <div
                className={`btn-container ${visibleCount > inputs.length ? "visible" : "hidden"}`}
                style={{ transitionDelay: `${inputs.length * 250}ms` }}
              >
                <button type="submit" className="send-button">Send Message</button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
