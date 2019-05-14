import React from 'react';
import { Link } from 'react-router-dom';

const Bio = () => {
  return (
    <div id="cv-bio">
      <div id="cv-bio-title">
        <h5>Bio</h5>
      </div>
      <p>I am a Full Stack Web Developer working with React, Ruby on Rails and JavaScript. I worked in the international development/humanitarian aid sector prior to learning to code. Find my projects <Link to="/projects">here</Link> </p>
    </div>
  )
}

export default Bio;
