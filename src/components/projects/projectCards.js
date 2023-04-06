import React from 'react';
// STYLINGS TO BE IMPORTED

export default function ProjectCards(props) {
    return (
        <div>
            {props.projects.map(item => (
                <div>
                    {/* <img></img> */}
                    <div>Name: {item.name}</div>
                    <div>Description: {item.description}</div>
                    <a href={item.githubLink}>Link To GitHub</a>
                    <a href={item.deployedLink}>Link to Deployed App/Demo</a>
                </div>
            ))}
        </div>
    )
}