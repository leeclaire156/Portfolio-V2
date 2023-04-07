import React from 'react';
import styles from '../../styles/cards.css';
import gitHub192 from '../../images/gitHub192.png'
import deployed192 from '../../images/deployed192.png'

export default function ProjectCards(props) {
    return (
        <div className='allProjects' style={styles}>
            {props.projects.map(item => (
                <div className='project' key={item.key}>
                    <img className='projectThumbnail' src={item.src} alt={item.imgAlt} />
                    <div className='projectName'>{item.name}</div>
                    <div className='projectDescription'>{item.description}</div>
                    <div className='projectLinks'>
                        <a href={item.githubLink} target="_blank" rel="noreferrer">
                            <img src={gitHub192} alt="hand drawn version of GitHub linked icon" height="65px" />
                        </a>
                        <a href={item.deployedLink} target="_blank" rel="noreferrer">
                            <img src={deployed192} alt="hand-drawn version of GitHub linked icon" height="65px" />
                        </a>
                    </div>
                </div>
            ))}
        </div>
    )
}