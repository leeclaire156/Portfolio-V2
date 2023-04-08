import React from "react";
import styles from '../../styles/footer.css';
import stackedOverflow192 from "../../images/stackedOverflow192.png";
import gitHub192 from "../../images/gitHub192.png";
import linkedIn192 from "../../images/linkedIn192.png";


export default function Footer() {
    return (
        <div>
            <footer style={styles.footer}>
                <div className="container footerContainer">
                    <div className="credits">
                        <div className="publishCredits">
                            Published by GitHub Pages
                        </div>
                        <div className="iconCredits">
                            Icons Drawn by Claire Lee With Paint Tool SAI
                        </div>
                    </div>
                    <div className="footerIcons">
                        <a href="https://stackoverflow.com/users/21561625/leeclaire156/" target="_blank" rel="noreferrer">
                            <img src={stackedOverflow192} height="50px" width="50px" alt="hand-drawn version of Stacked Overflow linked icon that lead's to Claire Lee's profile" />
                        </a>
                        <a href="https://github.com/leeclaire156/" target="_blank" rel="noreferrer">
                            <img src={gitHub192} height="50px" width="50px" alt="hand-drawn version of GitHub linked icon that lead's to Claire Lee's profile" />
                        </a>
                        <a href="https://www.linkedin.com/in/claire-lee-556b3a209/" target="_blank" rel="noreferrer">
                            <img src={linkedIn192} height="50px" width="50px" alt="hand-drawn version of LinkedIn linked icon that lead's to Claire Lee's profile" />
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}