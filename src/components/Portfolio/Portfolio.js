import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from '../../context/LanguageContext';
import './Portfolio.css';

// Import video asset directly
import Video1 from '../../assets/id1.mp4';
import Video2 from '../../assets/id2.mp4';
import Video3 from '../../assets/id3.mp4';
import Video4 from '../../assets/id4.mp4';
import Video5 from '../../assets/id5.mp4';

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);
  const t = useTranslation();

  const projects = [
    {
      id: 1,
      title: t.prt1,
      description: t.prt1Desc,
      video: Video1,
      url: 'https://miguelamtransportes.netlify.app/' // Add your actual URL here
    },
    {
      id: 2,
      title: t.prt2,
      description: t.prt2Desc,
      video: Video2,
      url: 'http://okoagallery.netlify.app/'
    },
    {
      id: 3,
      title: t.prt3,
      description: t.prt3Desc,
      video: Video3,
      url: 'https://littlelemontallinn.netlify.app/' 
    },
    {
      id: 4,
      title: t.prt4,
      description: t.prt4Desc,
      video: Video4,
      url: 'https://bcocoon.netlify.app/' 
    },
    {
      id: 5,
      title: t.prt5,
      description: t.prt5Desc,
      video: Video5,
      url: 'https://cardososarl.netlify.app/' 
    }
  ];

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = React.useCallback((newDirection) => {
    let newIndex = currentIndex + newDirection;
    if (newIndex < 0) newIndex = projects.length - 1;
    if (newIndex >= projects.length) newIndex = 0;
    setCurrentIndex(newIndex);
  }, [currentIndex, projects.length]);

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      if (isPlaying) {
        paginate(1);
      }
    }, 15000);

    return () => clearInterval(timer);
  }, [currentIndex, isPlaying, paginate]);

  // Handle video autoplay and looping
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.warn("Autoplay was prevented:", error);
      });
    }
  }, [currentIndex]);

  // Pause auto-advance on hover
  const handleMouseEnter = () => {
    setIsPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsPlaying(true);
  };

  return (
    <div className="portfolio-container">
      <h2>{t.recentWorks}</h2>
      
      <div 
        className="carousel-container"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          key={currentIndex}
          custom={currentIndex}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
          className="carousel-slide"
        >
          <video 
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            width="100%" 
            height="auto"
            src={projects[currentIndex].video} 
          />

          <div className="project-info">
            <h3>{projects[currentIndex].title}</h3>
            <p>{projects[currentIndex].description}</p>
            <motion.a
              href={projects[currentIndex].url}
              target="_blank"
              rel="noopener noreferrer"
              className="view-project-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t.viewProject}
            </motion.a>
          </div>
        </motion.div>

        <button 
          className="nav-button prev" 
          onClick={() => {
            paginate(-1);
            setIsPlaying(false);
          }}
          aria-label="Previous project"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          className="nav-button next" 
          onClick={() => {
            paginate(1);
            setIsPlaying(false);
          }}
          aria-label="Next project"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="carousel-dots">
        {projects.map((_, index) => (
          <motion.div
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            whileHover={{ scale: 1.2 }}
            onClick={() => {
              setCurrentIndex(index);
              setIsPlaying(false);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;