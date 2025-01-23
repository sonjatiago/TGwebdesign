// hooks/useContactScroll.js
import { useState, useEffect, useCallback } from 'react';

const useContactScroll = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  
  // Define contact page sections
  const sections = ['contact-info', 'contact-form'];
  
  const scrollToSection = useCallback((index) => {
    if (index >= 0 && index < sections.length && !isScrolling) {
      setIsScrolling(true);
      setCurrentSection(index);
      
      const element = document.getElementById(sections[index]);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }

      setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    }
  }, [isScrolling, sections]);

  const handleScroll = useCallback(() => {
    if (!isScrolling) {
      const position = window.scrollY;
      const vh = window.innerHeight;
      const sectionIndex = Math.floor((position + (vh / 3)) / vh);
      
      if (sectionIndex !== currentSection && sectionIndex < sections.length) {
        setCurrentSection(sectionIndex);
      }
    }
  }, [currentSection, sections.length, isScrolling]);

  useEffect(() => {
    const handleWheel = (event) => {
      if (!isScrolling) {
        if (event.deltaY > 0 && currentSection < sections.length - 1) {
          event.preventDefault();
          scrollToSection(currentSection + 1);
        } else if (event.deltaY < 0 && currentSection > 0) {
          event.preventDefault();
          scrollToSection(currentSection - 1);
        }
      }
    };

    const contactContainer = document.querySelector('.contact-container');
    if (contactContainer) {
      contactContainer.addEventListener('wheel', handleWheel, { passive: false });
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (contactContainer) {
        contactContainer.removeEventListener('wheel', handleWheel);
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, [currentSection, sections.length, isScrolling, scrollToSection, handleScroll]);

  return {
    currentSection,
    scrollToSection,
    sections
  };
};

export default useContactScroll;