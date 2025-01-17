// Home.js
import React, { useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from '../../context/LanguageContext';
import useScroll from '../../components/hooks/useScroll';
import './Home.css';
import Services from '../Services/Services';
import Partners from '../Partners/Partners';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';
import Logo from '../../assets/logo2.png';

const Home = () => {
  const navigate = useNavigate();
  const t = useTranslation();

  // Memoize sections array to prevent unnecessary rerenders
  const sections = useMemo(() => ['home', 'portfolio', 'services', 'partners', 'footer'], []);

  const { currentSection, scrollToSection } = useScroll(sections);

  // Memoize section visibility check
  const isSectionVisible = useCallback((index) => currentSection >= index, [currentSection]);

  // Animation variants for framer-motion
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom, duration: 0.8 }
    })
  };

  // Section render helper
  const renderSection = (Component, index, id) => (
    <motion.section
      id={id}
      className={`${id}-section ${isSectionVisible(index) ? 'visible' : ''}`}
      initial={false}
      animate={{
        opacity: isSectionVisible(index) ? 1 : 0,
        visibility: isSectionVisible(index) ? 'visible' : 'hidden'
      }}
      transition={{ duration: 0.5 }}
    >
      <AnimatePresence mode="wait">
        {isSectionVisible(index) && <Component />}
      </AnimatePresence>
    </motion.section>
  );

  return (
    <div className="home-container">
      <div className="sections-wrapper">
        {/* Hero Section */}
        <motion.section id="home" className="hero-section">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="hero-content"
          >
            <motion.img
              src={Logo}
              alt="Company Logo"
              className="hero-logo"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.15 }}
              transition={{ duration: 1 }}
            />
            
            <motion.h1
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              custom={0.5}
            >
              {t.heroSlogan}
            </motion.h1>

            <motion.p
              className="hero-subtitle"
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              custom={0.8}
            >
              {t.heroSubtitle}
            </motion.p>
          </motion.div>
        </motion.section>

        {/* Dynamic Sections */}
        {renderSection(Portfolio, 1, 'portfolio')}
        {renderSection(Services, 2, 'services')}
        {renderSection(Partners, 3, 'partners')}

        {/* Footer Section */}
        <motion.section
          id="footer"
          className={`footer-section ${isSectionVisible(4) ? 'visible' : ''}`}
          initial={false}
          animate={{
            opacity: isSectionVisible(4) ? 1 : 0,
            visibility: isSectionVisible(4) ? 'visible' : 'hidden'
          }}
          transition={{ duration: 0.5 }}
        >
          <Footer scrollToSection={scrollToSection} />
        </motion.section>
      </div>

      {/* Hire Us Button */}
      <motion.button
        className="hire-us-button"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate('/ContactUs')}
      >
        {t.hireUs}
      </motion.button>

      {/* Scroll Indicators */}
      <div className="scroll-indicator">
        {sections.slice(0, -1).map((section, index) => (
          <motion.div
            key={section}
            className={`indicator ${currentSection === index ? 'active' : ''}`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => scrollToSection(index)}
            aria-label={t[section]}
            title={t[section]}
            initial={false}
            animate={{
              backgroundColor: currentSection === index ? '#FF6B6B' : 'rgba(255, 255, 255, 0.3)'
            }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>
    </div>
  );
};

export default React.memo(Home);