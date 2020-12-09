import React from 'react';
import linkedin from "../images/linkedin.png"
import medium from "../images/medium.png"
import github from "../images/github.png"
import youtube from "../images/youtube.png"

function Footer() {

    return (
        <div className="socialFooter">
            <div className="socialLogo">
                <a href="https://www.linkedin.com/in/danielscottcole/">
                    <img id="socialLogo" src={linkedin} alt="linkedin-logo"></img>
                </a>
            </div>
            <div className="socialLogo">
                <a href="https://medium.com/@dscottcole">
                    <img id="socialLogo" src={medium} alt="medium-logo"></img>
                </a>
            </div>
            <div className="socialLogo">
                <a href="https://github.com/dscottcole">
                    <img id="socialLogo" src={github} alt="github-logo" ></img>
                </a>
            </div>
            <div className="socialLogo">
                <a href="https://www.youtube.com/channel/UC_N7pvRJHPpK7UnB7AuNGSA">
                    <img id="socialLogo" src={youtube} alt="youtube-logo" ></img>
                </a>
            </div>
        </div>
    )

}

export default Footer;