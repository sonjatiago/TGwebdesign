import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin } from 'lucide-react';
import { useTranslation } from '../../context/LanguageContext';
import useContactScroll from '../hooks/useContactScroll';
import './Contact.css';

const Contact = () => {
  const t = useTranslation();
  const { currentSection, scrollToSection, sections } = useContactScroll();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Phone size={24} />,
      title: t.phone,
      info: "+372 58 34 9800",
      delay: 0.2
    },
    {
      icon: <Mail size={24} />,
      title: t.email,
      info: "info@tgwebdesign.net",
      delay: 0.4
    },
    {
      icon: <MapPin size={24} />,
      title: t.address,
      info: "Tallinn, Estonia",
      delay: 0.6
    }
  ];

  return (
    <motion.div 
      className="contact-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.section
        id="contact-info"
        className="contact-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: currentSection === 0 ? 1 : 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          {t.getInTouch}
        </motion.h1>
        
        <motion.div 
          className="contact-info"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2>{t.letsTalk}</h2>
          <p>{t.projectVision}</p>
          
          <div className="info-cards">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                className="info-card"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: item.delay }}
              >
                <div className="icon">{item.icon}</div>
                <div className="info">
                  <h3>{item.title}</h3>
                  <p>{item.info}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.section>

      <motion.section
        id="contact-form"
        className="contact-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: currentSection === 1 ? 1 : 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="contact-form-container"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t.name}
                required
              />
            </div>
            
            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t.email}
                required
              />
            </div>
            
            <div className="form-group">
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder={t.subject}
                required
              />
            </div>
            
            <div className="form-group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t.message}
                required
                rows={5}
              />
            </div>

            <motion.button
              type="submit"
              className="submit-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={isSubmitted}
            >
              {isSubmitted ? (
                t.messageSent
              ) : (
                <>
                  {t.send}
                  <Send size={18} className="send-icon" />
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </motion.section>

      {/* Scroll Indicators */}
      <div className="scroll-indicator">
        {sections.map((section, index) => (
          <motion.div
            key={section}
            className={`indicator ${currentSection === index ? 'active' : ''}`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => scrollToSection(index)}
            aria-label={section}
            title={section}
            initial={false}
            animate={{
              backgroundColor: currentSection === index ? '#FF6B6B' : 'rgba(255, 255, 255, 0.3)'
            }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Contact;