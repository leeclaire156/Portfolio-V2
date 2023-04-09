import React from 'react';
import styles from '../../styles/about.css';
import profileImg from '../../images/profile-img.jpg';

export default function About() {
  return (
    <div style={styles}>
      <h2>About Me</h2>
      <div className='aboutMePg contentWrapper'>
        <div>
          <p className='aboutMeParagraph'>
            Hi there! I have a background in Chemistry and Biology but have always shined best when allowed to be creative in school projects.
            A year into my graduate research journey at The Ohio State University's food science program,
            I decided that it wasn't for me and that I desired a career that better balanced creativity and problem-solving skills.
            Please follow me as I develop websites and myself.
          </p>
        </div>
        <div className='tapedImg'>
          <div className='tape tape1' aria-hidden="true"></div>
          <div className='tape tape2' aria-hidden="true"></div>
          <div className='polaroid'>
            <img className='profileImg' src={profileImg} alt="Claire Lee with a polaroid frame around the image" />
          </div>
        </div>
      </div>
    </div>
  );
}
