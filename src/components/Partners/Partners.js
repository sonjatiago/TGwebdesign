import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../../context/LanguageContext';
import './Partners.css';
import Logo1 from '../../assets/lgmiguel.jpg';
import Logo2 from '../../assets/lgokoa.png';
import Logo3 from '../../assets/lgcardoso.png';
import Logo4 from '../../assets/lgbcocoon.jpg';

const Partners = () => {
  const t = useTranslation();

  const partners = [
    { id: 1, name: "OKOA ART", logo: Logo2 },
    { id: 2, name: "CARDOSO SARL", logo: Logo3 },
    { id: 3, name: "BCocoon", logo: Logo4 },
    { id: 4, name: "MiguelAM", logo: Logo1 },
  ];

  // Double the partners array for seamless infinite scroll
  const scrollPartners = [...partners, ...partners];

  return (
    <div className="partners-container">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
      >
        {t.ourPartners}
      </motion.h2>
      
      <div className="partners-slider-container">
        <motion.div 
          className="partners-slider"
          animate={{
            x: [0, -50 * scrollPartners.length],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {scrollPartners.map((partner, index) => (
            <motion.div
              key={`${partner.id}-${index}`}
              className="partner-logo"
                          whileHover={{ opacity: 1, scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img src={partner.logo} alt={partner.name} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Partners;