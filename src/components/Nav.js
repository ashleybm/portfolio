import React from 'react';
import { NavLink } from 'react-router-dom';
import logoDark from '../assets/ac_logo_dark.svg';
import logoWhite from '../assets/ac_logo_white.svg';
import './Nav.css';

function Nav({ darkMode, toggleDarkMode }) {
    return (
        <nav className={`navbar ${darkMode ? 'dark-mode' : 'light-mode'}`}>
            <div className="nav-container">
                <div className="nav-logo">
                    <NavLink to="/" exact="true">
                        <img 
                            src={darkMode ? logoWhite : logoDark} 
                            className="nav-logo-img" 
                            alt="Ashley M Copeland Logo" 
                            style={{ height: '4em' }}
                        />
                    </NavLink>
                </div>
                
                <div className="nav-links">
                    <NavLink to="/" exact="true">
                        <button className="nav-button">Home</button>
                    </NavLink>
                    <NavLink to="/resume">
                        <button className="nav-button">Resume</button>
                    </NavLink>
                    <NavLink to="/talks">
                        <button className="nav-button">Talks</button>
                    </NavLink>
                </div>
                
                <div className="dark-mode-toggle">
                    <button 
                        onClick={toggleDarkMode} 
                        className={`dark-mode-button ${darkMode ? 'bulb-off' : 'bulb-on'}`}
                        aria-label={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                    >
                        <span className="lightbulb-icon">💡</span>
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Nav;