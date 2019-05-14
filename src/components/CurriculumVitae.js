import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import Avatar from './myAvatarMini.png';
import Education from './Education';
import Technical from './Technical';
import Generalist from './Generalist';
import Experience from './Experience';
import Bio from './Bio';

class CurriculumVitae extends Component {
  constructor() {
    super()

    this.state = {
      techSkills: "technical",
      cvTable: "education",
    }

  }

  handleClickSkillsGeneralist = () => {
    this.setState({
      techSkills: "generalist",
    })
  }

  handleClickSkillsTechnical = () => {
    this.setState({
      techSkills: "technical",
    })
  }

  handleClickEducation = () => {
    this.setState({
      cvTable: "education",
    })
  }

  handleClickExperience = () => {
    this.setState({
      cvTable: "experience",
      })
  }

  render() {
    return (
      <div className="cv-page">
        <Grid>
          <Cell id="cv-right-column" col={3}>
          <div style={{textAlign: "center"}}>
            <img
            src={Avatar}
            alt="Avatar"
            style={{height: "150px"}}
            />
          </div>
          <h4 style={{paddingTop: "0.4em", width: "60%", margin: "0 auto"}}>Ruth Newman</h4>
          <h3 style={{fontSize: "1em", width: "60%", margin: "0 auto"}}>Full Stack Web Developer</h3>
          <hr style={{borderTop: "3px solid white"}}/>

          <div id="skills-btns">
          <button onClick={this.handleClickSkillsTechnical} id="skills-btn-tech" className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">Technical Skills</button>
          <button onClick={this.handleClickSkillsGeneralist} id="skills-btn-non-tech" className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">Generalist Skills</button>
          </div>
              {
                (this.state.techSkills === 'technical')
                ? <Technical />
                : <Generalist />
              }

        </Cell>
        <Cell id="cv-left-column" col={9}>
        <div className="cv-details">
          <Bio />
          <div id="cv-table-btns">
            <button onClick={this.handleClickEducation} id="cv-btn-education" className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">Education</button>
            <button onClick={this.handleClickExperience} id="cv-btn-experience" className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">Working Experience</button>
          </div>
          {
            (this.state.cvTable === "education")
              ? <Education />
              : <Experience />
          }

        </div>
        </Cell>
      </Grid>
    </div>
    )
  }


}

export default CurriculumVitae;
