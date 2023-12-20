import { useState, useEffect } from 'react';

const UseLocalStorage = (key, initialValue) => {
  const storedValue = JSON.parse(localStorage.getItem(key));
  const [value, setValue] = useState(storedValue || initialValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default UseLocalStorage;
