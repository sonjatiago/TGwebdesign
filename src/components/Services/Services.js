import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Paintbrush, Smartphone,} from 'lucide-react';
import { useTranslation } from '../../context/LanguageContext';
import './Services.css';

const Services = () => {
  const t = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const services = [
    {
      icon: <Code size={24} />,
      title: t.webDevelopment,
      description: t.webDevelopmentDesc
    },
    {
      icon: <Paintbrush size={24} />,
      title: t.uiuxDesign,
      description: t.uiuxDesignDesc
    },
    {
      icon: <Smartphone size={24} />,
      title: t.mobileDev,
      description: t.mobileDevDesc
    },
    {
      icon: <Smartphone size={24} />,
      title: t.logodev,
      description: t.logodevDesc
    },
  ];

  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === services.length - 4 ? 0 : prevIndex + 1
        );
      }, 3000);

      return () => clearInterval(timer);
    }
  }, [services.length, isHovered]);

  const getVisibleServices = () => {
    const visibleServices = [];
    for (let i = 0; i < 4; i++) {
      const index = (currentIndex + i) % services.length;
      visibleServices.push(services[index]);
    }
    return visibleServices;
  };

  return (
    <div className="services-container">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {t.services}
      </motion.h2>

      <div 
        className="services-carousel-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <AnimatePresence mode="wait">
          <motion.div 
            className="services-row"
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            {getVisibleServices().map((service, index) => (
              <motion.div 
                key={index}
                className="service-card"
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 8px 30px rgba(0,0,0,0.12)"
                }}
                layout
              >
                <div className="service-icon">
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="carousel-indicators">
        {Array.from({ length: services.length - 3 }).map((_, index) => (
          <motion.div
            key={index}
            className={`indicator ${currentIndex === index ? 'active' : ''}`}
            whileHover={{ scale: 1.2 }}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;