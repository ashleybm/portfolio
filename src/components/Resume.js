import React from 'react';
import './Resume.css';
import resumePDF from '../assets/AshleyMCopeland_Resume.pdf';

const Resume = ({ darkMode }) => {
  return (
    <div className={`resume-container ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="resume-section">
        <h1>My Resume</h1>
        <div className="pdf-container">
          <object
            data={resumePDF}
            type="application/pdf"
            width="100%"
            height="900px"
            className="resume-pdf"
          >
            <p>
              It appears your browser doesn't support embedded PDFs.
              <a href={resumePDF} target="_blank" rel="noopener noreferrer">
                Click here to download the PDF instead.
              </a>
            </p>
          </object>
        </div>
      </div>
    </div>
  );
};

export default Resume;
