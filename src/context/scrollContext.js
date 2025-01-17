// src/context/ScrollContext.js
import React, { createContext, useContext } from 'react';

const ScrollContext = createContext();

export const useScrollContext = () => useContext(ScrollContext);

export const ScrollProvider = ({ children, value }) => (
  <ScrollContext.Provider value={value}>
    {children}
  </ScrollContext.Provider>
);