import React from 'react';
// STYLINGS TO BE IMPORTED

export default function ProjectCards(props) {
    return (
        <div>
            {props.projects.map(item => (
                <div>
                    <img src={item.src} alt={item.imgAlt} height="250px" />
                    <div>Name: {item.name}</div>
                    <div>Description: {item.description}</div>
                    <div><a href={item.githubLink} target="_blank" rel="noreferrer">Link To GitHub</a></div>
                    <div><a href={item.deployedLink} target="_blank" rel="noreferrer">Link to Deployed App/Demo</a></div>
                </div>
            ))}
        </div>
    )
}