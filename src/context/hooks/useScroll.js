import { useState, useEffect, useCallback } from 'react';

const useScroll = (sections) => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const scrollToSection = useCallback((index) => {
    if (index >= 0 && index < sections.length && !isScrolling) {
      setIsScrolling(true);
      setCurrentSection(index);
      
      const targetPosition = index * window.innerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });

      // Reset scrolling flag after animation completes
      setTimeout(() => {
        setIsScrolling(false);
      }, 1000); // Adjust this timing to match your scroll animation duration
    }
  }, [sections.length, isScrolling]);

  // Handle scroll events
  const handleScroll = useCallback(() => {
    if (!isScrolling) {
      const position = window.scrollY;
      const vh = window.innerHeight;
      const sectionIndex = Math.floor((position + (vh / 2)) / vh);
      
      if (sectionIndex !== currentSection && sectionIndex < sections.length) {
        setCurrentSection(sectionIndex);
      }
    }
  }, [currentSection, sections.length, isScrolling]);

  // Handle wheel events for section-by-section scrolling
  useEffect(() => {
    const handleWheel = (event) => {
      event.preventDefault();
      
      if (!isScrolling) {
        if (event.deltaY > 0 && currentSection < sections.length - 1) {
          // Scroll down
          scrollToSection(currentSection + 1);
        } else if (event.deltaY < 0 && currentSection > 0) {
          // Scroll up
          scrollToSection(currentSection - 1);
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentSection, sections.length, isScrolling, scrollToSection, handleScroll]);

  return {
    currentSection,
    scrollToSection
  };
};

export default useScroll;