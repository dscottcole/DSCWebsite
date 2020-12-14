import { Typography, Button } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import LinkIcon from '@material-ui/icons/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

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

function ProjectCard(props) {
    const [windowWidth, windowHeight] = useWindowSize()
    const project = props.project
    const [expanded, setExpanded] = useState(false);

    const handleClick = () => {
        setExpanded(!expanded)
    }

    const appButton = (
        <Button startIcon={<LinkIcon />} size="small" variant="contained" style={{ backgroundColor: "rgba(0,0,0,1)", color: "rgba(255,255,255,1)" }} href={project.applicationLink}>
            App
        </Button>
    )
    const githubButton = (
        <Button startIcon={<GitHubIcon />} size="small" variant="contained" style={{ backgroundColor: "rgba(0,0,0,1)", color: "rgba(255,255,255,1)" }} href={project.combinedGithub}>
            Github
        </Button>
    )
    const githubButtonBack = (
        <Button startIcon={<GitHubIcon />} size="small" variant="contained" style={{ backgroundColor: "rgba(0,0,0,1)", color: "rgba(255,255,255,1)" }} href={project.githubBack}>
            Back
        </Button>
    )
    const githubButtonFront = (
        <Button startIcon={<GitHubIcon />} size="small" variant="contained" style={{ backgroundColor: "rgba(0,0,0,1)", color: "rgba(255,255,255,1)" }} href={project.githubFront}>
            Front
        </Button>
    )
    const moreInfoButton = (
        <Button startIcon={<ExpandMoreIcon />} onClick={handleClick} size="small" variant="contained" style={{ backgroundColor: "rgba(255,255,255,1)", color: "rgba(0,0,0,1)" }}>
            Info
        </Button>
    )

    const lessInfoButton = (
        <Button startIcon={<ExpandLessIcon />} onClick={handleClick} size="small" variant="contained" style={{ backgroundColor: "rgba(255,255,255,1)", color: "rgba(0,0,0,1)" }}>
            Info
        </Button>
    )

    const projectCardVert = (
        <div>
            <div className="projectCard-mobile-vert">
                <div className="projectName">
                    <Typography variant="h3">{project.name}</Typography>
                </div>
                <div className="videoPreview">
                    <iframe id="videoPreview-mobile-vert" title={project.name} src={project.youtubeLink} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
                </div>
                <div className="projectDesc">
                    {expanded === false ? <Typography variant="h5">{project.briefDescription}</Typography> : <Typography variant="h5">{project.longDescription}</Typography>}
                </div>
                <div className="buttonSection-mobile-vert">
                    {project.longDescription !== null ? (expanded === false ? moreInfoButton : lessInfoButton) : null}
                    {project.applicationLink !== null ? appButton : null}
                    {project.combinedGithub !== null ? githubButton : null}
                    {project.githubFront !== null ? githubButtonFront : null}
                    {project.githubBack !== null ? githubButtonBack : null}
                </div>
            </div>
            <hr className="solid"></hr>
        </div>
    )

    const projectCardHori = (
        <div>
            <div className="projectCard-mobile-hori">
                <div className="projectName">
                    <Typography variant="h3">{project.name}</Typography>
                </div>
                <div className="videoPreview">
                    <iframe id="videoPreview-mobile-hori" title={project.name} src={project.youtubeLink} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
                </div>
                <div className="projectDesc">
                    {expanded === false ? <Typography variant="h5">{project.briefDescription}</Typography> : <Typography variant="h5">{project.longDescription}</Typography>}
                </div>
                <div className="buttonSection-mobile-hori">
                    {project.longDescription !== null ? (expanded === false ? moreInfoButton : lessInfoButton) : null}
                    {project.applicationLink !== null ? appButton : null}
                    {project.combinedGithub !== null ? githubButton : null}
                    {project.githubFront !== null ? githubButtonFront : null}
                    {project.githubBack !== null ? githubButtonBack : null}
                </div>
            </div>
            <hr className="solid"></hr>
        </div>
    )

    return (
        <div>
            {windowHeight < windowWidth ? projectCardHori : projectCardVert}
        </div>
    )
}

export default ProjectCard