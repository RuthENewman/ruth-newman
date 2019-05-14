import React from 'react';
import HomePage from './HomePage';
import About from './About';
import Contact from './Contact';
import CurriculumVitae from './CurriculumVitae';
import Projects from './Projects';
import { Switch, Route } from 'react-router-dom';

const Main = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/about" component={About} />
    <Route path="/projects" component={Projects} />
    <Route path="/curriculumvitae" component={CurriculumVitae} />
    <Route path="/contact" component={Contact} />
  </Switch>

)

export default Main;
