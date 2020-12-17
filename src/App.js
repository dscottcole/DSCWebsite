import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Menu from './components/Menu'
import Footer from './components/Footer'
import SecondFooter from './components/SecondFooter'
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import {
  Switch,
  Route,
  withRouter,
  Redirect
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  App: {
    flexGrow: 1,
  }
}));

function useWindowSize() {
  // const [size, setSize] = useState([0, 0]);
  const [size, setSize] = useState(0)
  useEffect(() => {
    function updateSize() {
      // setSize([window.innerWidth, window.innerHeight]);
      setSize(window.innerWidth)
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

function App(props) {
  const classes = useStyles();

  // const [windowWidth, windowHeight] = useWindowSize()
  const windowWidth = useWindowSize()
  const options = ["Home", "Portfolio", "Résumé", "About Me", "Contact Me"]
  const pushArray = ["/", "/portfolio", "/resume", "/about", "/contact"]

  const [currentTab, setCurrentTab] = useState(window.location.pathname !== "/" ? options[pushArray.indexOf(window.location.pathname)] : "Home");

  const changeTab = (tabName) => {
    if (tabName !== null) {
      typeof tabName === 'number' ? setCurrentTab(options[tabName]) : setCurrentTab(tabName)
    }
  }

  useEffect(() => {
    if (currentTab === undefined) {
      setCurrentTab("Home")
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    props.history.push(`${pushArray[options.indexOf(currentTab)]}`)
  }, [currentTab]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const handleChange = () => {
      setCurrentTab(options[pushArray.indexOf(window.location.pathname)])
    }

    window.addEventListener('popstate', handleChange)

    return () => window.removeEventListener('popstate', handleChange)
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Switch>
      <div className={classes.App}>
        <AppBar color="transparent">
          {windowWidth <= 1080 ? <Menu options={options} changeTab={changeTab} /> : <Navbar options={options} changeTab={changeTab} newValue={options.indexOf(currentTab)} />}
        </AppBar>

        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/portfolio">
          <Portfolio />
        </Route>

        <Route path="/resume">
          <Resume />
        </Route>

        <Route path="/about">
          <AboutMe />
        </Route>

        <Route path="/contact">
          <ContactMe />
        </Route>

        <Route>
          <Redirect to="/" />
        </Route>

        {currentTab === "Home"? <SecondFooter /> : null}
        <Footer />
      </div>
    </Switch>
  );
}

export default withRouter(App);