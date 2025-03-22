import React from 'react';
import './Talks.css';

const Talks = ({ darkMode }) => {
  // The correct embed URL format for Google Slides
  const slideEmbedUrl = "https://docs.google.com/presentation/d/1JjO5s3-hZ68XFNQQ6QJmMwFq0CcPMKpFDv9qOKaA50s/embed?start=false&loop=false&delayms=3000";
  
  // The direct link to the presentation
  const slidesDirectLink = "https://docs.google.com/presentation/d/1JjO5s3-hZ68XFNQQ6QJmMwFq0CcPMKpFDv9qOKaA50s/edit?usp=sharing";

  return (
    <div className={`talks-container ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="talks-section">
        <h1>My Talks</h1>
        <div className="slides-container">
          <iframe
            src={slideEmbedUrl}
            frameBorder="0"
            width="100%"
            height="600"
            allowFullScreen={true}
            className="google-slides"
            title="Google Slides Presentation"
          ></iframe>
        </div>
        <div className="talk-description">
          <h2>Presentation Overview</h2>
          <p>
            This is my presentation on [Topic]. Feel free to navigate through the slides using the controls.
            You can also <a href={slidesDirectLink} target="_blank" rel="noopener noreferrer">view the presentation in a new tab</a> for a full-screen experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Talks;
