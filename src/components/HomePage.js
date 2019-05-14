import React, { Component } from 'react';
import Avatar from './myAvatarMini.png';

class HomePage extends Component {
  render() {
    return (
      <div style={{width: "100%", margin: "0 auto"}}>
        <div id="home-page-grid">
            <div className="image-container">
              <img
                className="avatar-img"
                src={Avatar}
                alt="Avatar Pic"
              />
            </div>
            <div className="banner-text">
              <h1>Ruth Newman</h1>
              <h2>Full Stack Web Developer</h2>
              <hr />
              <p> HTML | CSS | JavaScript | jQuery | React | ReactNative | Ruby on Rails </p>
            <div className="social-links">
              <a href="https://github.com/RuthENewman" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-github-square" aria-hidden="true"/>
              </a>
              <a href="https://www.linkedin.com/in/ruth-newman-a138a925/" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-linkedin-square" aria-hidden="true"/>
              </a>
              <a href="https://www.freecodecamp.org/ruthnewman" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-free-code-camp" aria-hidden="true"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }


}

export default HomePage;
