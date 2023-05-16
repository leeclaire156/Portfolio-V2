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
            <br></br>
            <br></br>
            This site was inspired by my old Hayden McNeil's carbon copy lab notebooks and scrap booking with Washi tape. All the icons were drawn by me with my Huion drawing tablet and a program called Paint Tool SAI.
            <br></br>
            <br></br>
            If you'd like to see my work and contact me, my GitHub profile is www.github.com/leeclaire156, and my email is lee.claire156@gmail.com.
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
