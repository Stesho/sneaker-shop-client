import { useLayoutEffect, useState } from 'react';

const useTheme = () => {
  const [theme, setTheme] = useState(localStorage.getItem('color-theme'));

  const toggleTheme = (isChecked) => {
    const newTheme = isChecked ? 'dark' : 'light';
    setTheme(newTheme); 
    localStorage.setItem('color-theme', newTheme);
  }

  useLayoutEffect(() => {
    document.documentElement.setAttribute('color-theme', theme);
  }, [theme]);

  return [theme, toggleTheme];
};

export default useTheme;