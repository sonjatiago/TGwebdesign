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
        animate={{ opacity: 1, y: 0 }}
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
              initial={{ opacity: 0.3 }}
              whileHover={{ opacity: 1, scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img src={partner.logo} alt={partner.name} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div 
        className="partnership-cta"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <h3>{t.partnershipCTA}</h3>
        <motion.button
          className="partner-with-us-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {t.partnerWithUs}
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Partners;