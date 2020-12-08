import React from "react";
import { makeStyles, withStyles } from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";

const StyledTabs = withStyles({
  indicator: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    "& > span": {
      maxWidth: 40,
      width: "100%",
    backgroundColor: "rgba(255,100,0)"
    },
    margin: "auto"
  }
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: "none",
    color: "#fff",
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.typography.pxToRem(20),
    marginRight: theme.spacing(1),
    "&:focus": {
      opacity: 1
    }
  }
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  padding: {
    padding: theme.spacing(1)
  },
  nav: {
    // backgroundColor: "#2e1534",
    backgroundColor: "rgba(0,0,0,0.7)",
    minWidth: window.innerWidth
  },
  logo: {
    color: "rgba(255,100,0,1)",
    
  }
}));

export default function Navbar(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <div className={classes.nav}>
        <StyledTabs
          value={value}
          onChange={handleChange}
        >
          {props.options.map(option => <StyledTab label={option} />)}
          {/* <Typography className={classes.logo} variant="h4" >DSC</Typography> */}
        </StyledTabs>
        <Typography className={classes.padding} />
      </div>
    </div>
  );
}
