import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode'

const NavBar = () => {
  const [darkMode, setDarkMode] = useDarkMode('darkMode', false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return(
    <nav className="navbar">
      <h3>Womens World Cup Players Indexed by Search Interest</h3>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  )
}

export default NavBar;