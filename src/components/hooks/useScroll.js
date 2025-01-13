import { useState, useEffect, useCallback } from 'react';

const useScroll = (sections) => {
  const [currentSection, setCurrentSection] = useState(0);

  const handleScroll = useCallback(() => {
    const position = window.scrollY;
    const vh = window.innerHeight;
    const sectionIndex = Math.floor((position + (vh / 2)) / vh);
    
    if (sectionIndex !== currentSection && sectionIndex < sections.length) {
      setCurrentSection(sectionIndex);
    }
  }, [currentSection, sections.length]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollToSection = (index) => {
    const targetPosition = index * window.innerHeight;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  };

  return {
    currentSection,
    scrollToSection
  };
};

export default useScroll;