import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "rgba(0,0,0,0.7)",
        height: "7.5vh"
    },
    expandedMenu: {
        backgroundColor: "rgba(0,0,0,0.7)",
        color: "rgba(255,255,255,1)"
    }
}));

export default function FadeMenu(props) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={classes.root}>
            <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
                <MenuIcon style={{ backgroundColor: "rgba(0,0,0,0.5)", color: "rgba(255,100,0,1)", height: "35", width: "35" }}/>
            </Button>
            <Menu
                id="fade-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
                className="test"
            >
                {props.options.map(option => <MenuItem onClick={handleClose}>{option}</MenuItem>)}
            </Menu>
        </div>
    );
}
