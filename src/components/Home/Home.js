import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from '../../context/LanguageContext';
import useScroll from '../../components/hooks/useScroll';
import './Home.css';
import Services from '../Services/Services';
import Partners from '../Partners/Partners';
import Portfolio from '../Portfolio/Portfolio';
import Logo from '../../assets/logo2.png';

const Home = () => {
  const navigate = useNavigate();
  const t = useTranslation();

  const sections = [
    'home',
    'portfolio',
    'services',
    'partners'
  ];

  const { currentSection, scrollToSection } = useScroll(sections);

  return (
    <div className="home-container">
      <div className="sections-wrapper">
        <section id="home" className="hero-section">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="hero-content"
          >
            <img src={Logo} alt="Company Logo" className="hero-logo" />
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              {t.heroSlogan}
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="hero-subtitle"
            >
              {t.heroSubtitle}
            </motion.p>
          </motion.div>
        </section>

        <section 
          id="portfolio" 
          className={`portfolio-section ${currentSection >= 1 ? 'visible' : ''}`}
          style={{ 
            opacity: currentSection >= 1 ? 1 : 0,
            visibility: currentSection >= 1 ? 'visible' : 'hidden'
          }}
        >
          <Portfolio />
        </section>

        <section 
          id="services" 
          className={`services-section ${currentSection >= 2 ? 'visible' : ''}`}
          style={{ 
            opacity: currentSection >= 2 ? 1 : 0,
            visibility: currentSection >= 2 ? 'visible' : 'hidden'
          }}
        >
          <Services />
        </section>

        <section 
          id="partners" 
          className={`partners-section ${currentSection >= 3 ? 'visible' : ''}`}
          style={{ 
            opacity: currentSection >= 3 ? 1 : 0,
            visibility: currentSection >= 3 ? 'visible' : 'hidden'
          }}
        >
          <Partners />
        </section>
      </div>

      <motion.button
        className="hire-us-button"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate('/ContactUs')}
      >
        {t.hireUs}
      </motion.button>

      <div className="scroll-indicator">
        {sections.map((section, index) => (
          <motion.div
            key={section}
            className={`indicator ${currentSection === index ? 'active' : ''}`}
            whileHover={{ scale: 1.2 }}
            onClick={() => scrollToSection(index)}
            aria-label={t[section]}
            title={t[section]}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;