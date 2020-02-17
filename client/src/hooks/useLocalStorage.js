import React, { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {

  const [storedValue, setStoredValue] = useState(() => {
    if (localStorage.getItem(key)) {
      return JSON.parse(localStorage.getItem(key));  //if local storage has a value stored at this key
    } else {
      localStorage.setItem(key, JSON.stringify(initialValue)); //otherwise set this key and show that it is undefined
      return initialValue; //undefined
    }
  });

  const setValue = newValue => {
    setStoredValue(newValue)
    window.localStorage.setItem(key, JSON.stringify(newValue));
  };
  
  return [storedValue, setValue]
};

