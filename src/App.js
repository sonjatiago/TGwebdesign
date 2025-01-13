import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { LanguageProvider } from './context/LanguageContext';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import { NavBar } from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import CustomCookieConsent from './components/CustomCookieConsent';
import Loader from './components/Loader';  // Import the Loader component
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

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);  // Hide the loader after 3 seconds
    }, 4000); // Change this timeout duration as needed
  }, []);

  return (
    <LanguageProvider>
      <Router>
        <div className="app">
          {/* Show the Loader while loading */}
          {loading && <Loader />}

          <NavBar />
          <main className="main-content">
            <AnimatedRoutes />
          </main>
          <Footer />
          <CustomCookieConsent />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
