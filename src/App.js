import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { LanguageProvider } from './context/LanguageContext';
import { ScrollProvider } from './context/ScrollContext';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import { NavBar } from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import CustomCookieConsent from './components/CustomCookieConsent';
import Loader from './components/Loader';
import './App.css';

// AnimatedRoutes component
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

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <LanguageProvider>
      <ScrollProvider>
        <Router>
          <div className="app">
            {loading && <Loader />}
            <NavBar />
            <main className="main-content">
              <AnimatedRoutes />
            </main>
            <Footer />
            <CustomCookieConsent />
          </div>
        </Router>
      </ScrollProvider>
    </LanguageProvider>
  );
};

export default App;