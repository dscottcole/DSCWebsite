import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Menu from './components/Menu'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));

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

function App() {
  const classes = useStyles();

  const [windowWidth, windowHeight] = useWindowSize()
  const options = ["Home", "Portfolio", "Résumé", "About Me"]

  const [currentTab, setCurrentTab] = useState("Home");

  const changeTab = (tabName) => typeof tabName === 'number'? setCurrentTab(options[tabName]) : setCurrentTab(tabName)

  return (
    <div className={classes.root}>
      <AppBar color="transparent">
          {windowWidth <= 900 ? <Menu options={options} changeTab={changeTab} /> : <Navbar options={options} changeTab={changeTab} newValue={options.indexOf(currentTab)}/>}
      </AppBar>
    </div>
  );
}

export default App;