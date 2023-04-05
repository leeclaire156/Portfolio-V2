import React from 'react';
import profileImg from '../../images/profile-img.jpg';

export default function About() {
  return (
    <div>
      <h1>About Me</h1>
      <div className='aboutMePg'>
        <p>
          Hi there! I have a background in Chemistry and Biology but have always shined best when allowed to be creative in school projects.
          A year into my graduate research journey at The Ohio State University's food science program,
          I decided that it wasn't for me and that I desired a career that better balanced creativity and problem-solving skills.
          Please follow me as I develop websites and myself.
        </p>
        <div className='polaroid'>
          <div className='tape tape1'></div>
          <div className='tape tape2'></div>
          <img src={profileImg} className='profileImg' />
        </div>
      </div>
    </div>
  );
}
