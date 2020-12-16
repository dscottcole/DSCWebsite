import React, { useState, useEffect } from "react";
import DSC2 from '../images/DSC70.jpg'
import { Typography } from "@material-ui/core"

function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}

function AboutMe() {

    const [windowWidth, windowHeight] = useWindowSize()

    const isMobile = () => /Mobi|Android/i.test(navigator.userAgent)

    const text1 = "I am a petroleum engineer turned software engineer. After graduating from Louisiana State University, I worked as a petroleum engineer, performing and analyzing oil and gas well completions operations. This is where I realized how much I enjoyed programming and data analytics, as I was employing them to find solutions to everyday problems. This realization led me to attain a Software Engineering certification from Flatiron School, where I learned Javascript, Ruby, and applied them throughout a series of hands-on projects. Now, I am on the path to becoming an experienced software developer, and I plan to leverage my insatiable curiosity, ability to learn quickly, and knack for problem-solving while on this journey."

    const text2 = "For my personal development, I am working on refining my React.js & Redux.js knowledge. After that, I am planning on completing a Python bootcamp and will be looking for projects to apply my new Python skills."

    const text3 = "Mountain biking is my favorite way to spend my spare time, even though I am currently living in Houston and there are no mountains in sight. The lack of elevation has led me to participate in gravel and road cycling more often. I am currently training for the 2021 Mid South Gravel 100, which is a 100 mile gravel race that takes place annually in Oklahoma. I hope to complete it, even though it might turn into 100 miles of pedaling through mud like it did last year due to inclement weather conditions."

    const text4 = "If you’d like to grab a coffee, go mountain biking/cycling, or simply connect with me, please do not hesitate to reach me at danielscole1@gmail.com, LinkedIn, or through the contact form on my website."

    const aboutmeDesktop = (
        <div className="bodyDiv-aboutme">
            <div className="container-aboutme">
                <div className="aboutme-image">
                    <img id="dsc-aboutme" src={DSC2} alt="dsc2"></img>
                </div>
                <div className="aboutme-text">
                    <Typography variant="h5">
                        <div>
                            {text1}
                        </div>
                        <div>
                            <br></br>
                            {text2}
                        </div>
                        <div>
                            <br></br>
                            {text3}
                        </div>
                        <div>
                            <br></br>
                            {text4}
                        </div>
                    </Typography>
                </div>
            </div>
        </div>
    )

    const aboutmeMobileVert = (
        <div className="bodyDiv-aboutme-mobile-vert">
            <div className="container-aboutme">
                <div className="aboutme-image-mobile-vert">
                    <img id="dsc-aboutme-mobile-vert" src={DSC2} alt="dsc2"></img>
                </div>
                <div className="aboutme-text-mobile-vert">
                    <Typography variant="h5">
                        <div>
                            {text1}
                        </div>
                        <div>
                            <br></br>
                            {text2}
                        </div>
                        <div>
                            <br></br>
                            {text3}
                        </div>
                        <div>
                            <br></br>
                            {text4}
                        </div>                    
                    </Typography>
                </div>
            </div>
        </div>
    )

    const aboutmeMobileHori = (
        <div className="bodyDiv-aboutme-mobile-hori">
            <div className="container-aboutme">
                <div className="aboutme-image-mobile-hori">
                    <img id="dsc-aboutme-mobile-hori" src={DSC2} alt="dsc2"></img>
                </div>
                <div className="aboutme-text-mobile-hori">
                    <Typography variant="h5">
                        <div>
                            {text1}
                        </div>
                        <div>
                            <br></br>
                            {text2}
                        </div>
                        <div>
                            <br></br>
                            {text3}
                        </div>
                    </Typography>
                </div>
            </div>
        </div>
    )

    return (
        <div>
            {isMobile() === false ? aboutmeDesktop : (windowHeight < windowWidth ? aboutmeMobileHori : aboutmeMobileVert)}
        </div>

    )
}

export default AboutMe;