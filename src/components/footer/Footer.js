import React from "react";
import stackedOverflow192 from "../../images/stackedOverflow192.png";
import gitHub192 from "../../images/gitHub192.png";
import linkedIn192 from "../../images/linkedIn192.png";


export default function Footer() {
    return (
        <footer>
            <div>
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
            <div className="mt-2">
                Published by GitHub Pages
            </div>
            <div >
                Icons Drawn by Claire Lee With Paint Tool SAI
            </div>
        </footer>
    );
}