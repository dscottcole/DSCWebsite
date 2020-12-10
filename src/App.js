import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Menu from './components/Menu'
import Footer from './components/Footer'
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";

const useStyles = makeStyles((theme) => ({
  App: {
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
  const options = ["Home", "Portfolio", "Résumé", "About Me", "Contact Me"]

  const [currentTab, setCurrentTab] = useState("Home");

  const changeTab = (tabName) => {
    if (tabName !== null) {
      typeof tabName === 'number'? setCurrentTab(options[tabName]) : setCurrentTab(tabName)
    }
  }

  return (
    <div className={classes.App}>
      <AppBar color="transparent">
          {windowWidth <= 900 ? <Menu options={options} changeTab={changeTab} /> : <Navbar options={options} changeTab={changeTab} newValue={options.indexOf(currentTab)}/>}
      </AppBar>
      {currentTab === "Home"? <Home /> : null}
      {currentTab === "Portfolio"? <Portfolio /> : null}
      {currentTab === "Résumé"? <Resume /> : null}
      {currentTab === "About Me"? <AboutMe /> : null}
      {currentTab === "Contact Me"? <ContactMe /> : null}
      <Footer />
    </div>
  );
}

export default App;