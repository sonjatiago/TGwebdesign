import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { LanguageProvider } from './context/LanguageContext';
import { ScrollProvider } from './context/scrollContext';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import { NavBar } from './components/Navbar/Navbar';
import CustomCookieConsent from './components/CustomCookieConsent';
import Loader from './components/Loader';
import './App.css';

// Wrapper component to handle animations
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ContactUs" element={<Contact />} />
        <Route path="/Quotation" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

// Create a layout component to handle the scroll context
const Layout = ({ children }) => {
  const location = useLocation();
  const [scrollConfig, setScrollConfig] = useState({
    scrollToSection: null
  });

  // Reset scroll position when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <ScrollProvider value={{ ...scrollConfig, setScrollConfig }}>
      <NavBar />
      <main className="main-content">
        {children}
      </main>
      <CustomCookieConsent />
    </ScrollProvider>
  );
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <LanguageProvider>
      <Router>
        <div className="app">
          {loading && <Loader />}
          <Layout>
            <AnimatedRoutes />
          </Layout>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;