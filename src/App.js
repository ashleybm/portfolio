import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Resume from './components/Resume';
import Talks from './components/Talks';
import Article from './components/Article';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check if user has a preference saved in localStorage
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode) {
      setDarkMode(JSON.parse(savedMode));
    }
  }, []);

  useEffect(() => {
    // Apply dark mode class to body
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    // Save preference to localStorage
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router basename="/portfolio">
      <div className={`App ${darkMode ? 'dark-mode' : 'light-mode'}`}>
        <Nav darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home darkMode={darkMode} />} />
            <Route path="/resume" element={<Resume darkMode={darkMode} />} />
            <Route path="/talks" element={<Talks darkMode={darkMode} />} />
            <Route path="article/:slug" element={<Article darkMode={darkMode} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
