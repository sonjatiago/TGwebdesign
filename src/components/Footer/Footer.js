// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowUpCircle
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useScrollContext } from '../../context/ScrollContext';  // Import ScrollContext
import Logo from '../../assets/logo.png';
import './Footer.css';

const Footer = () => {
  const { t } = useLanguage();
  const { scrollToSection } = useScrollContext();  // Get scrollToSection from context

  const scrollToTop = () => {
    if (scrollToSection) {
      scrollToSection(0);
    }
  };

  const handleQuickLinkClick = (sectionIndex) => (e) => {
    e.preventDefault();
    if (scrollToSection) {
      scrollToSection(sectionIndex);
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Company Info Section */}
        <div className="footer-section">
          <div className="footer-logo-container">
            <img src={Logo} alt="Company Logo" className="footer-logo" />
          </div>
          <p className="company-description">
            {t.footerDescription}
          </p>
          <div className="social-links">
            <motion.a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Facebook size={20} />
            </motion.a>
            <motion.a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Twitter size={20} />
            </motion.a>
            <motion.a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Instagram size={20} />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin size={20} />
            </motion.a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section">
          <h3>{t.quickLinks}</h3>
          <ul className="footer-links">
            <li>
              <Link to="/" onClick={handleQuickLinkClick(0)}>{t.home}</Link>
            </li>
            <li>
              <Link to="/" onClick={handleQuickLinkClick(1)}>{t.portfolio}</Link>
            </li>
            <li>
              <Link to="/" onClick={handleQuickLinkClick(2)}>{t.services}</Link>
            </li>
            <li>
              <Link to="/" onClick={handleQuickLinkClick(3)}>{t.partners}</Link>
            </li>
            <li>
              <Link to="/ContactUs">{t.contactUs}</Link>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section">
          <h3>{t.contactInfo}</h3>
          <div className="contact-info">
            <div className="contact-item">
              <Mail size={16} />
              <a href={`mailto:${t.companyEmail}`}>{t.companyEmail}</a>
            </div>
            <div className="contact-item">
              <Phone size={16} />
              <a href={`tel:${t.companyPhone}`}>{t.companyPhone}</a>
            </div>
            <div className="contact-item">
              <MapPin size={16} />
              <span>{t.companyAddress}</span>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <motion.button
          className="back-to-top"
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          title={t.backToTop}
          aria-label={t.backToTop}
        >
          <ArrowUpCircle size={24} />
        </motion.button>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} TG Web Design. {t.allRightsReserved}</p>
      </div>
    </footer>
  );
};

export default Footer;