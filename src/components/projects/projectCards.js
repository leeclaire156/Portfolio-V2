import React from 'react';
import styles from '../../styles/cards.css';
import gitHub192 from '../../images/gitHub192.png'
import deployed192 from '../../images/deployed192.png'

export default function ProjectCards(props) {
    return (
        <div className='allProjects' style={styles}>
            {props.projects.map(item => (
                <div className='project' key={item.key} >
                    {/* images + tech used */}
                    <div className="flip-card">
                        <div className='flip-card-inner'>
                            {/* image (front) */}
                            <div className='flip-card-front'>
                                <img className='projectThumbnail' src={item.src} alt={item.imgAlt} />
                            </div>
                            {/* tech used (back) */}
                            <div className='flip-card-back'>
                                <div className='back-title'>Tech Used:</div>
                                <div className='back-content mt-2'>{item.tech}</div>
                                <div>{item.username} </div>
                                <div>{item.password}</div>
                            </div>
                        </div>
                    </div>
                    {/* text */}
                    <div className='belowCard'>
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
                </div>
            ))}
        </div>
    )
}