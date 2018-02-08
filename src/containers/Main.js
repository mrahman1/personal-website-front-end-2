import React from "react";
import AboutView from '../components/About/AboutView'
import ContactView from '../components/Contact/ContactView'
import ProjectList from '../components/Projects/ProjectList'
import ResumeView from '../components/Resume/ResumeView'
import { Route, Switch, withRouter } from "react-router-dom";


const Main = props => {
  return (
    <div className = "main">
      <Switch>
        <Route exact path="/" render={ () => <AboutView />} />
        <Route exact path="/about" render={ () => <AboutView />} />
        <Route exact path="/contact" render={ ()=> <ContactView/>} />
        <Route exact path="/projects" render={ ()=> <ProjectList/>} />
        <Route exact path="/resume" render={ ()=> <ResumeView/>} />
      </Switch>
    </div>
    );
};


export default withRouter(Main);
