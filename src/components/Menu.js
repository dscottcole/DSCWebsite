import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from "@material-ui/core";
import LogoMobile from './LogoMobile'

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "rgba(0,0,0,1)",
        height: 50
    },
    expandedMenu: {
        backgroundColor: "rgba(0,0,0,1)",
        color: "rgba(255,255,255,1)"
    }
}));

export default function FadeMenu(props) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event,newValue) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (event,newValue) => {
        setAnchorEl(null);
        props.changeTab(event.target.getAttribute('name'))
    };

    return (
        <div className={classes.root}>
            <LogoMobile />
            <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
                <MenuIcon style={{ borderRadius: "3px", backgroundColor: "rgba(0,0,0,0.5)", color: "rgba(255,100,0,1)", height: "30", width: "30", paddingTop: "2px" }}/>
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
                {props.options.map((option, index) => <MenuItem name={option} key={index} onClick={handleClose}>{option}</MenuItem>)}
            </Menu>
        </div>
    );
}
