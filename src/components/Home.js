import React, { useEffect, useState } from "react";
import DSC from "../images/DSC.jpg"
import Typography from '@material-ui/core/Typography';

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

function Home() {

    const [windowWidth, windowHeight] = useWindowSize()

    const isMobile = () => /Mobi|Android/i.test(navigator.userAgent)

    const homeDesktop = (
        <div className="bodyDiv-home">
            <div className="container-home">
                <div className="home-image">
                    <img id="dsc-home" src={DSC} alt="DSC-avatar"></img>
                </div>
                <div className="home-text">
                    <Typography variant="h3"> Daniel Scott Cole </Typography>
                    <Typography style={{ color: "rgba(238,238,238,1)" }} variant="h5">I'm a software engineer with experience in Javascript and Ruby frameworks.</Typography>
                    <Typography style={{ color: "rgba(238,238,238,1)" }} variant="h5">I hope you enjoy checking out my website and portfolio.</Typography>
                    <div className="home-bottom-text">
                        <Typography style={{ color: "rgba(255,100,0,1)" }} variant="h5">I built this website using React.js.</Typography>
                    </div>
                </div>
            </div>
        </div>
    )

    const homeMobileVert = (
        <div className="bodyDiv-home-mobile-vert">
            <div className="container-home">
                <div className="home-image-mobile">
                    <img id="dsc-home-mobile" src={DSC} alt="DSC-avatar"></img>
                </div>
                <div className="home-text">
                    <Typography variant="h3"> Daniel Scott Cole </Typography>
                    <Typography style={{ color: "rgba(191,191,191,1)" }} variant="h5">I'm a software engineer with experience in Javascript and Ruby frameworks.</Typography>
                    <Typography style={{ color: "rgba(191,191,191,1)" }} variant="h5">I hope you enjoy checking out my website and portfolio.</Typography>
                    <div className="home-bottom-text">
                        <Typography style={{ color: "rgba(255,100,0,1)" }} variant="h5">I built this website using React.js.</Typography>
                    </div>
                </div>
            </div>
        </div>
    )

    const homeMobileHori = (
        <div className="bodyDiv-home-mobile-hori">
            <div className="container-home">
                <div className="home-image-mobile">
                    <img id="dsc-home-mobile" src={DSC} alt="DSC-avatar"></img>
                </div>
                <div className="home-text">
                    <Typography variant="h3"> Daniel Scott Cole </Typography>
                    <Typography style={{ color: "rgba(191,191,191,1)" }} variant="h5">I'm a software engineer with experience in Javascript and Ruby frameworks.</Typography>
                    <Typography style={{ color: "rgba(191,191,191,1)" }} variant="h5">I hope you enjoy checking out my website and portfolio.</Typography>
                    <div className="home-bottom-text">
                        <Typography style={{ color: "rgba(255,100,0,1)" }} variant="h5">I built this website using React.js.</Typography>
                    </div>
                </div>
            </div>
        </div>
    )

    return (
        <div>
            {isMobile() === false ? homeDesktop : (windowHeight < windowWidth ? homeMobileHori : homeMobileVert)}
        </div>
    )
}

export default Home;