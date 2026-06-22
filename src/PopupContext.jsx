import React, { createContext, useState, useContext } from 'react';

const PopupContext = createContext();

export function PopupProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [popupType, setPopupType] = useState('appointment'); // 'appointment' or 'callback'

  const openPopup = (type = 'appointment') => {
    setPopupType(type);
    setIsOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closePopup = () => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <PopupContext.Provider value={{ isOpen, popupType, openPopup, closePopup }}>
      {children}
    </PopupContext.Provider>
  );
}

export const usePopup = () => useContext(PopupContext);
