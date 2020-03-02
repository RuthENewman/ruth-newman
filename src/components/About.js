import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class About extends Component {
  render() {
    return (
      <div className="about-page">
        <div className="page-heading">
        <h1>About Me</h1>
        </div>
        <div className="about-summary">
        <p>I am a Full Stack Web Developer specialising in <span className="specialisation">JavaScript</span>, 
        <span className="specialisation"> React</span>, 
        <span className="specialisation"> PHP</span> and 
          <span className="specialisation"> Ruby on Rails</span>. 
        Additionally, I have experience with 
        <span className="specialisation"> jQuery</span>, 
        <span className="specialisation"> HTML</span>, 
        <span className="specialisation"> CSS</span>, and 
        <span className="specialisation"> SQL</span> and
        continue to build with additional languages, frameworks and libraries.
        </p>
        <p>Having worked internationally, including across South Asia, East Africa and the Former Soviet Union, and in the humanitarian
          and international development sectors for several years, I am experienced in working remotely and with teams with diverse backgrounds and with diverse contributions.</p>
        <p>Projects I designed, managed and monitored have ranged in length and size, from several months to several years, and from several thousand pounds to several million.</p>
        <p>In additional to my technical skills, I am experienced in financial management, project management, proposal and report writing, and people management.
          </p>
          <p>I have a genuine passion for learning, which has spurred my decision to learn to code, but also includes learning multiple human(!) languages.</p>
          <p>I speak native English, advanced Spanish and German, and am also always trying to learn the Russian language.
        </p>
        <p>Countries worked/studied in:</p>
        </div>
        <div className="image-container-flags">
        <img src="http://img.freeflagicons.com/thumb/round_icon/nepal/nepal_640.png" alt="Nepal"/>
        <img src="http://img.freeflagicons.com/thumb/round_icon/bangladesh/bangladesh_640.png" alt="Bangladesh"/>
        <img src="http://img.freeflagicons.com/thumb/round_icon/united_kingdom/united_kingdom_640.png" alt="UK"/>
        <img src="http://img.freeflagicons.com/thumb/round_icon/germany/germany_640.png" alt="Germany"/>
        <img src="http://img.freeflagicons.com/thumb/round_icon/colombia/colombia_640.png" alt="Colombia"/>
        </div>

      </div>
    )
  }


}

export default About;
