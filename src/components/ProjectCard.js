import { Typography, Button } from "@material-ui/core";
import { React, useState } from "react";
import LinkIcon from '@material-ui/icons/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';


function ProjectCard(props) {
    const project = props.project
    const [expanded, setExpanded] = useState(false);

    const handleClick = () => {
        setExpanded(!expanded)
    }

    const appButton = (
        <div className="projectButton">
            <Button startIcon={<LinkIcon />} size="medium" variant="contained" style={{ backgroundColor: "rgba(0,0,0,1)", color: "rgba(255,255,255,1)" }} href={project.applicationLink}>
                Application
            </Button>
        </div>
    )
    const githubButton = (
        <div className="projectButton">
            <Button startIcon={<GitHubIcon />} size="medium" variant="contained" style={{ backgroundColor: "rgba(0,0,0,1)", color: "rgba(255,255,255,1)" }} href={project.combinedGithub}>
                Github
            </Button>
        </div>
    )
    const githubButtonBack = (
        <div className="projectButton">
            <Button startIcon={<GitHubIcon />} size="medium" variant="contained" style={{ backgroundColor: "rgba(0,0,0,1)", color: "rgba(255,255,255,1)" }} href={project.githubBack}>
                Github Backend
            </Button>
        </div>
    )
    const githubButtonFront = (
        <div className="projectButton">
            <Button startIcon={<GitHubIcon />} size="medium" variant="contained" style={{ backgroundColor: "rgba(0,0,0,1)", color: "rgba(255,255,255,1)" }} href={project.githubFront}>
                Github Frontend
            </Button>
        </div>
    )
    const moreInfoButton = (
        <div className="projectButton">
            <Button startIcon={<ExpandMoreIcon />} onClick={handleClick} size="medium" variant="contained" style={{ backgroundColor: "rgba(255,255,255,1)", color: "rgba(0,0,0,1)"}}>
                More Info
            </Button>
        </div>
    )

    const lessInfoButton = (
        <div className="projectButton">
            <Button startIcon={<ExpandLessIcon />} onClick={handleClick} size="medium" variant="contained" style={{ backgroundColor: "rgba(255,255,255,1)", color: "rgba(0,0,0,1)"}}>
                Less Info
            </Button>
        </div>
    )

    return (
        <div>
            <div className="projectCard">
                <div className="videoPreview">
                    <iframe id="videoPreview" title={project.name} src={project.youtubeLink} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
                </div>
                <div className="projectInfo">
                    <div className="projectName">
                        <Typography variant="h3">{project.name}</Typography>
                    </div>
                    <div className="projectDesc">
                        {expanded === false ? <Typography variant="h5">{project.briefDescription}</Typography> : <Typography variant="h5">{project.longDescription}</Typography>}
                    </div>
                    <div className="buttonSection">
                        {project.longDescription !== null ? (expanded === false ? moreInfoButton : lessInfoButton) : null}
                        {project.applicationLink !== null ? appButton : null}
                        {project.combinedGithub !== null ? githubButton : null}
                        {project.githubFront !== null ? githubButtonFront : null}
                        {project.githubBack !== null ? githubButtonBack : null}
                    </div>
                </div>
            </div>
            <hr className="solid"></hr>
        </div>
    )
}

export default ProjectCard