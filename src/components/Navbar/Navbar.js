import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import Logo from '../../assets/logo.png';
import './Navbar.css';

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isMobileLangOpen, setIsMobileLangOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeout = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { language, setLanguage, languages, t } = useLanguage();

  // Memoize sections array
  const sections = useMemo(() => ['home', 'portfolio', 'services', 'partners'], []);

  // Memoize navItems array
  const navItems = useMemo(() => [
    { path: '/', label: t.home, section: 'home' },
    { path: '/', label: t.portfolio, section: 'portfolio' },
    { path: '/', label: t.services, section: 'services' },
    { path: '/', label: t.partners, section: 'partners' },
    { path: '/Contact', label: t.contactUs },
  ], [t.home, t.portfolio, t.services, t.partners, t.contactUs]);

  // Handle scroll detection with debouncing
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);

    if (location.pathname === '/') {
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      if (!isScrolling) {
        const scrollPosition = window.scrollY;
        const viewportHeight = window.innerHeight;
        const threshold = viewportHeight * 0.5;
        const sectionIndex = Math.floor((scrollPosition + threshold) / viewportHeight);
        
        if (sectionIndex >= 0 && sectionIndex < sections.length) {
          const newSection = sections[sectionIndex];
          if (newSection !== activeSection) {
            setActiveSection(newSection);
            window.history.replaceState(null, null, `#${newSection}`);
          }
        }
      }

      // Debounce scroll handling
      scrollTimeout.current = setTimeout(() => {
        const scrollPosition = window.scrollY;
        const viewportHeight = window.innerHeight;
        const sectionIndex = Math.round(scrollPosition / viewportHeight);
        
        window.scrollTo({
          top: sectionIndex * viewportHeight,
          behavior: 'smooth'
        });
      }, 50);
    }
  }, [location.pathname, activeSection, isScrolling, sections]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [handleScroll]);

  // Handle initial section on load
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && location.pathname === '/' && sections.includes(hash)) {
      const sectionIndex = sections.indexOf(hash);
      requestAnimationFrame(() => {
        setIsScrolling(true);
        window.scrollTo({
          top: sectionIndex * window.innerHeight,
          behavior: 'smooth'
        });
        setTimeout(() => setIsScrolling(false), 1000);
        setActiveSection(hash);
      });
    }
  }, [location.pathname, sections]);

  // Scroll to section function
  const scrollToSection = useCallback((sectionName) => {
    if (!sections.includes(sectionName)) return;
    
    const sectionIndex = sections.indexOf(sectionName);
    setIsScrolling(true);
    
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        window.scrollTo({
          top: sectionIndex * window.innerHeight,
          behavior: 'smooth'
        });
        setTimeout(() => setIsScrolling(false), 1000);
      }, 100);
    } else {
      window.scrollTo({
        top: sectionIndex * window.innerHeight,
        behavior: 'smooth'
      });
      setTimeout(() => setIsScrolling(false), 1000);
    }
    
    setActiveSection(sectionName);
    window.history.replaceState(null, null, `#${sectionName}`);
  }, [location.pathname, navigate, sections]);

  // Handle navigation click
  const handleNavClick = useCallback((e, path, section) => {
    e.preventDefault();
    
    if (section) {
      scrollToSection(section);
    } else {
      navigate(path);
    }
    
    setIsMenuOpen(false);
  }, [navigate, scrollToSection]);

  // Handle language selection
  const handleLanguageSelect = useCallback((langCode) => {
    try {
      setLanguage(langCode);
      setIsLangDropdownOpen(false);
      setIsMobileLangOpen(false);
      setIsMenuOpen(false);
    } catch (error) {
      console.error('Error setting language:', error);
    }
  }, [setLanguage]);

  // Handle clicks outside language dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isLangDropdownOpen && !event.target.closest('.language-switcher')) {
        setIsLangDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isLangDropdownOpen]);

  // Handle mobile menu body lock
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isMenuOpen]);

  // Reset state on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setIsLangDropdownOpen(false);
    setIsMobileLangOpen(false);
  }, [location.pathname]);

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link 
          to="/" 
          className="logo-container"
          onClick={(e) => handleNavClick(e, '/', 'home')}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={Logo} alt="Logo" className="logo" />
          </motion.div>
        </Link>

        <div className="nav-buttons">
          <nav className="desktop-nav">
            {navItems.map((item) => (
              <Link
                key={item.path + item.section}
                to={item.path}
                className={`nav-link ${
                  item.section ? 
                    (activeSection === item.section ? 'active' : '') : 
                    (location.pathname === item.path ? 'active' : '')
                }`}
                onClick={(e) => handleNavClick(e, item.path, item.section)}
              >
                {item.label}
              </Link>
            ))}
            
            <div className="language-switcher">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setIsLangDropdownOpen(!isLangDropdownOpen);
                }}
                className="nav-link lang-button"
              >
                {languages.find(lang => lang.code === language)?.flag}
                <span className="lang-code">{language.toUpperCase()}</span>
              </button>

              <AnimatePresence>
                {isLangDropdownOpen && (
                  <motion.div 
                    className="lang-dropdown"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => handleLanguageSelect(lang.code)}
                        className={`lang-option ${language === lang.code ? 'active' : ''}`}
                      >
                        {lang.flag}
                        <span>{lang.label}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          <button 
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <>
              <motion.div 
                className="nav-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMenuOpen(false)}
              />
              <motion.div 
                className="nav-menu"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
              >
                {navItems.map((item) => (
                  <Link
                    key={item.path + item.section}
                    to={item.path}
                    className={`nav-item ${
                      item.section ?
                        (activeSection === item.section ? 'active' : '') :
                        (location.pathname === item.path ? 'active' : '')
                    }`}
                    onClick={(e) => handleNavClick(e, item.path, item.section)}
                  >
                    {item.label}
                  </Link>
                ))}

                <div className="mobile-lang-switcher">
                  <button
                    className="mobile-lang-selected"
                    onClick={() => setIsMobileLangOpen(!isMobileLangOpen)}
                  >
                    <span className="mobile-lang-current">
                      {languages.find(lang => lang.code === language)?.flag}
                      <span>{languages.find(lang => lang.code === language)?.label}</span>
                    </span>
                    <ChevronDown 
                      size={16} 
                      className={`chevron ${isMobileLangOpen ? 'open' : ''}`}
                    />
                  </button>
                  
                  <AnimatePresence>
                    {isMobileLangOpen && (
                      <motion.div
                        className="mobile-lang-options"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {languages
                          .filter(lang => lang.code !== language)
                          .map((lang) => (
                            <button
                              key={lang.code}
                              onClick={() => handleLanguageSelect(lang.code)}
                              className="mobile-lang-option"
                            >
                              {lang.flag}
                              <span>{lang.label}</span>
                            </button>
                          ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};