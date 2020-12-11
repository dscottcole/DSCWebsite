import React from "react";
import DSC2 from '../images/DSC2.jpg'
import { Typography } from "@material-ui/core"

function AboutMe() {

    const isMobile = () => /Mobi|Android/i.test(navigator.userAgent)


    const aboutmeDesktop = (
        <div className="bodyDiv-aboutme">
            <div className="container-aboutme">
                <div className="aboutme-image">
                    <img id="dsc-aboutme" src={DSC2} alt="dsc2"></img>
                </div>
                <div className="aboutme-text">
                    <Typography variant="h4">
                        <div>
                            I am a mountain biker/cyclist who also happens to be a petroleum engineer turned software engineer. After graduating from Louisiana State University, I worked as a petroleum engineer performing and analyzing oil/gas well completions operations. This is where I realized how much I enjoyed programming and data analytics as I was employing them to find solutions to problems every day. This realization led me to attain a Software Engineering certification from Flatiron School where I learned Javascript, Ruby, and worked on multiple projects. Now, I am on the path to becoming an experienced software developer, and I plan to leverage my insatiable curiosity, ability to learn quickly, and knack for problem-solving while on this journey.
                        </div>
                        <div>
                            <br></br>
                             my personal development, I am working on refining my React.js & Redux.js knowledge. After that, I am planning on completing a Python bootcamp while training for the 2021 Mid South Gravel 100.
                        </div>
                        <div>
                            <br></br>
                            If you’d like to grab a coffee, go mountain biking/cycling, or simply connect, please do not hesitate to reach me at danielscole1@gmail.com, LinkedIn, or through the contact form on my website.
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
                            I am a mountain biker/cyclist who also happens to be a petroleum engineer turned software engineer. After graduating from Louisiana State University, I worked as a petroleum engineer performing and analyzing oil/gas well completions operations. This is where I realized how much I enjoyed programming and data analytics as I was employing them to find solutions to problems every day. This realization led me to attain a Software Engineering certification from Flatiron School where I learned Javascript, Ruby, and worked on multiple projects. Now, I am on the path to becoming an experienced software developer, and I plan to leverage my insatiable curiosity, ability to learn quickly, and knack for problem-solving while on this journey.
                        </div>
                        <div>
                            <br></br>
                             my personal development, I am working on refining my React.js & Redux.js knowledge. After that, I am planning on completing a Python bootcamp while training for the 2021 Mid South Gravel 100.
                        </div>
                        <div>
                            <br></br>
                            If you’d like to grab a coffee, go mountain biking/cycling, or simply connect, please do not hesitate to reach me at danielscole1@gmail.com, LinkedIn, or through the contact form on my website.
                        </div>
                    </Typography>
                </div>
            </div>
        </div>
    )

    return (
        <div>
            {isMobile() === false ? aboutmeDesktop : aboutmeMobileVert}
        </div>

    )
}

export default AboutMe;