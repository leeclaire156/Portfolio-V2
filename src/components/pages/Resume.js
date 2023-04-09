import React from 'react';
import styles from '../../styles/resume.css';
import doc192 from '../../images/doc192.png'
import pdf192 from '../../images/pdf192.png'

export default function Resume() {
  return (
    <div className='ResumePg contentWrapper' style={styles}>
      <h2>Resume Download Page</h2>
      <div className='downloads'>
        <div className='pdfDownload resumeDownload'>
          <a href={require("../resumes/Lee_Claire_Resume.pdf")} download>
            <img src={pdf192} alt="hand drawn version of Adobe PDF Icon" height="80px" />
            <span>Lee_Claire_Resume.PDF</span>
          </a>
        </div>

        <div className='docDownload resumeDownload'>
          <a href={require("../resumes/Lee_Claire_Resume.docx")} download>
            <img src={doc192} alt="hand drawn version of Microsoft WORD Icon" height="80px" />
            <span>Lee_Claire_Resume.DOCX</span>
          </a>
        </div>
      </div>
      <div className='skills'>
        <h3>Skills</h3>
        <div className='frontEndSkills'>
          <h4>Front-End Proficiencies</h4>
          <p>
            HTML, CSS, JS, Handlebars, React, Bootstrap, Bulma, Responsive Design
          </p>
        </div>
        <div className='backEndSkills'>
          <h4>Back-End Proficiencies</h4>
          <p>
            APIs, Node, Express, MySQL & Sequelize, MongoDB & Mongoose, REST API Practices, GraphQL, JEST
          </p>
        </div>
        <div className='moreTechSkills'>
          <h4>Additional Technical Tools & Skills</h4>
          <p>
            GitHub, Wire-framing, Paint Tool S.A.I.
          </p>
        </div>
        <div className='softSkills'>
          <h4>Soft Skills</h4>
          <p>
            Communication, visual thinking, creativity, problem-solving, adaptability, collaboration, patience, growth mindset
          </p>
        </div>
      </div>
    </div>
  );
}
