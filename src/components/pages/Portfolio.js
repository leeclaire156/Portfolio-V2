import React from 'react';
import ProjectCards from '../projects/projectCards';

const projects = [
  {
    name: 'fake',
    description: 'title tile tile',
    githubLink: "#blank",
    deployedLink: "#blank"
  },
  {
    name: 'fake2',
    description: 'title tile 2',
    githubLink: "#blank",
    deployedLink: "#blank"
  },
];

export default function Portfolio() {
  return (
    <div className='Portfolio Body'>
      <h1>Portfolio Page</h1>
      <div>
        <ProjectCards projects={projects} />
      </div>
    </div>
  );
}
