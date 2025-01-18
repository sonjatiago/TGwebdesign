// src/context/ScrollContext.js
import React, { createContext, useContext } from 'react';
import useScroll from '../components/hooks/useScroll';

const ScrollContext = createContext();

export const useScrollContext = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error('useScrollContext must be used within a ScrollProvider');
  }
  return context;
};

export const ScrollProvider = ({ children }) => {
  // Define your sections array here or pass it as a prop
  const sections = ['home', 'portfolio', 'services', 'partners', 'footer'];
  
  const scrollValues = useScroll(sections);

  return (
    <ScrollContext.Provider value={scrollValues}>
      {children}
    </ScrollContext.Provider>
  );
};