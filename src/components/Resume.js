import React from "react";
import { useEffect, useState } from "react"

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

function Resume() {

    const [windowWidth, windowHeight] = useWindowSize()

    const isMobile = () => /Mobi|Android/i.test(navigator.userAgent)

    const resumeFileID = "1ruGz_RvkoRNh8shL7ZkPjt57KT8Vnmng"

    const resumeDesktop = (
        <div className="bodyDiv-resume">
            <iframe id="embeddedResume" frameborder="0" scrolling="no"
                src={`https://drive.google.com/file/d/${resumeFileID}/preview`}>
            </iframe>
        </div>
    )

    const resumeMobileVert = (
        <div className="bodyDiv-resume-mobile-vert">
            <iframe id="embeddedResume-mobile-vert" frameborder="0" scrolling="no"
                src={`https://drive.google.com/file/d/${resumeFileID}/preview`}>
            </iframe>
        </div>
    )

    const resumeMobileHorizontal = (
        <div className="bodyDiv-resume-mobile-hori">
            <iframe id="embeddedResume-mobile-hori" frameborder="0" scrolling="no"
                src={`https://drive.google.com/file/d/${resumeFileID}/preview`}>
            </iframe>
        </div>
    )

    return (
        <div>
            {isMobile() === false ? resumeDesktop : (windowHeight < windowWidth ? resumeMobileHorizontal : resumeMobileVert)}
        </div>
    )
}

export default Resume;