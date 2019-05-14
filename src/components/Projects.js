import React, { Component } from 'react';


class Projects extends Component {
  constructor() {
    super()

    this.state = {
      activeTab: "",
    };
  }


handleClickReact = () => {
  this.setState({
    activeTab: "react",
  })
}

handleClickRubyOnRails = () => {
  this.setState({
    activeTab: "ruby-on-rails",
  })
}

handleClickVanillaJavaScript = () => {
  this.setState({
    activeTab: "vanilla-JavaScript",
  })
}

handleClickReset = () => {
  this.setState({
    activeTab: "",
  })
}

renderProjects = () => {
  if (this.state.activeTab === 'react') {
  return (
    <div className="mdl-tabs__panel" id="react-panel">

        <div id="project_card_1" className="mdl-card" shadow={5} style={{minWidth: "250"}}>
            <div className="mdl-card__title" style={{color: "#fff", height: "150px", backgroundImage: "url(https://logos-download.com/wp-content/uploads/2016/09/React_logo_small.png)", backgroundRepeat: "no-repeat", margin: "0 auto", width: "70%"}}></div>
            <div className="mdl-card__supporting-text">
              <p>ZIMA: an e-commerce web application</p>
            </div>
            <div className="mdl-card__actions">
              <button id="project-card-button" className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">
              GitHub</button>
              <button id="project-card-button" className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent"><a href="https://zima-ecommerce.herokuapp.com/" target="_blank">Hosted Site</a></button>
            </div>
          </div>

        <div id="project_card_2" className="mdl-card" shadow={5} style={{minWidth: "250"}}>
          <div className="mdl-card__title" style={{color: "#fff", height: "150px", backgroundImage: "url(https://logos-download.com/wp-content/uploads/2016/09/React_logo_small.png)", backgroundRepeat: "no-repeat", margin: "0 auto", width: "70%"}}></div>
          <div className="mdl-card__supporting-text">
            <p>SONGLOBE: a web application where you can discover music from around the world</p>
          </div>
          <div className="upcoming">Upcoming project
          </div>
        </div>
    </div>)
  } else if (this.state.activeTab === 'vanilla-JavaScript') {
    return (
      <div className="mdl-tabs__panel" id="vanilla-javascript-panel">

      <div id="project_card_3" className="mdl-card" shadow={5} style={{minWidth: "250"}}>
          <div className="mdl-card__title" style={{color: "#fff", height: "150px", backgroundRepeat: "no-repeat", margin: "0 auto", width: "90%", backgroundPosition: "center", backgroundImage: "url(https://img.icons8.com/color/2x/javascript.png)"}}></div>
          <div className="mdl-card__supporting-text">
            <p>30 vanilla JavaScript projects over 30 days challenge</p>
          </div>
          <div className="mdl-card__actions">
            <button id="project-card-button" className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent"><a href="https://github.com/RuthENewman/30vanillaJSprojects" target="_blank">GitHub</a></button>
          </div>
        </div>
    <div className="mdl-tabs__panel" id="vanilla-javascript-panel">

      <div id="project_card_3" className="mdl-card" shadow={5} style={{minWidth: "250"}}>
          <div className="mdl-card__title" style={{color: "#fff", height: "150px", backgroundRepeat: "no-repeat", margin: "0 auto", width: "90%", backgroundPosition: "center", backgroundImage: "url(https://img.icons8.com/color/2x/javascript.png)"}}></div>
          <div className="mdl-card__supporting-text">
            <p>Social Scrapbook: a web application scrapbooking your cultural endeavours</p>
          </div>
          <div className="mdl-card__actions">
            <button id="project-card-button" className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent"><a href="https://github.com/RuthENewman/SocialScrapbook" target="_blank">GitHub</a></button>
          </div>
          </div>
      </div>  
  </div>)
  } else if (this.state.activeTab === 'ruby-on-rails') {
     return (
     <div className="mdl-tabs__panel" id="ruby-on-rails-panel">
        <div id="project_card_4" className="mdl-card" shadow={5} style={{minWidth: "250"}}>
              <div className="mdl-card__title" style={{color: "#fff", height: "150px", backgroundImage: "url(http://evolve-enterprise.com/wp-content/uploads/2017/01/rails-new.sh_-300x300.png", backgroundPosition: "center"}}></div>
              <div className="mdl-card__supporting-text">
                <p>My Gallery app: create your own gallery of your favourite artists and artworks!</p>
              </div>
              <div className="mdl-card__actions">
                <button id="project-card-button" className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">
                    <a href="https://github.com/RuthENewman/MyGalleryApp" target="_blank">GitHub</a>
                </button>
              </div>
          </div>

          <div id="project_card_5" className="mdl-card" shadow={5} style={{minWidth: "250"}}>
              <div className="mdl-card__title" style={{color: "#fff", height: "150px", backgroundImage: "url(http://evolve-enterprise.com/wp-content/uploads/2017/01/rails-new.sh_-300x300.png", backgroundPosition: "center"}}></div>
              <div className="mdl-card__supporting-text">
                <p>Choose Your Leader: a website for people interested in both astrology and geopolitics</p>
              </div>
              <div className="mdl-card__actions">
                <button id="project-card-button" className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent"><a href="https://github.com/RuthENewman/Choose-Your-Leader" target="_blank">GitHub</a></button>
              </div>
          </div>
        </div>
      )
  } else if (this.state.activeTab === "") {
    return (
    <div className="all">
      <div className="mdl-tabs__panel" id="react-panel">

          <div id="project_card_1" className="mdl-card" shadow={5} style={{minWidth: "250"}}>
              <div className="mdl-card__title" style={{color: "#fff", height: "150px", backgroundImage: "url(https://logos-download.com/wp-content/uploads/2016/09/React_logo_small.png)", backgroundRepeat: "no-repeat", margin: "0 auto", width: "70%"}}></div>
              <div className="mdl-card__supporting-text">
                <p>ZIMA: an e-commerce web application</p>
              </div>
              <div className="mdl-card__actions">
                <button id="project-card-button" className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">
                GitHub</button>
                <button id="project-card-button" className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">Hosted Site</button>
              </div>
          </div>

          <div id="project_card_2" className="mdl-card" shadow={5} style={{minWidth: "250"}}>
            <div className="mdl-card__title" style={{color: "#fff", height: "150px", backgroundImage: "url(https://logos-download.com/wp-content/uploads/2016/09/React_logo_small.png)", backgroundRepeat: "no-repeat", margin: "0 auto", width: "70%"}}></div>
            <div className="mdl-card__supporting-text">
              <p>Music Globus: a web application where you can discover music from around the world</p>
            </div>
            <div className="upcoming">Upcoming project
            </div>
          </div>

      </div>

      <div className="mdl-tabs__panel" id="vanilla-javascript-panel">

      <div id="project_card_3" className="mdl-card" shadow={5} style={{minWidth: "250"}}>
          <div className="mdl-card__title" style={{color: "#fff", height: "150px", backgroundRepeat: "no-repeat", margin: "0 auto", width: "90%", backgroundPosition: "center", backgroundImage: "url(https://img.icons8.com/color/2x/javascript.png)"}}></div>
          <div className="mdl-card__supporting-text">
            <p>Social Scrapbook: a web application scrapbooking your cultural endeavours</p>
          </div>
          <div className="mdl-card__actions">
            <button id="project-card-button" className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">GitHub</button>
          </div>
        </div>
    </div>

    <div className="mdl-tabs__panel" id="ruby-on-rails-panel">

    <div id="project_card_4" className="mdl-card" shadow={5} style={{minWidth: "250"}}>
          <div className="mdl-card__title" style={{color: "#fff", height: "150px", backgroundImage: "url(http://evolve-enterprise.com/wp-content/uploads/2017/01/rails-new.sh_-300x300.png", backgroundPosition: "center"}}></div>
          <div className="mdl-card__supporting-text">
            <p>My Gallery app: create your own gallery of your favourite artists and artworks!</p>
          </div>
          <div className="mdl-card__actions">
            <button id="project-card-button" className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">GitHub</button>
          </div>
      </div>

      <div id="project_card_5" className="mdl-card" shadow={5} style={{minWidth: "250"}}>
          <div className="mdl-card__title" style={{color: "#fff", height: "150px", backgroundImage: "url(http://evolve-enterprise.com/wp-content/uploads/2017/01/rails-new.sh_-300x300.png", backgroundPosition: "center"}}></div>
          <div className="mdl-card__supporting-text">
            <p>Choose Your Leader: website for people interested in both horoscopes and geopolitics</p>
          </div>
          <div className="mdl-card__actions">
            <button id="project-card-button" className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">GitHub</button>
          </div>
      </div>
    </div>
    </div>
    )
  }
}

  render() {
    return (
      <div className="projects-page">
          <h1 className="projects-header">My Projects</h1>
          <div className="mdl-tabs mdl-js-tabs mdl-js-ripple-effect">
          <div className="mdl-tabs__tab-bar">
            <p onClick={this.handleClickReact} className="mdl-tabs__tab is-active" id="react-tab">React</p>
            <p onClick={this.handleClickVanillaJavaScript} className="mdl-tabs__tab" id="vanilla-js-tab">Vanilla JavaScript</p>
            <p onClick={this.handleClickRubyOnRails} className="mdl-tabs__tab" id="ruby-tab">Ruby on Rails</p>
            <p onClick={this.handleClickReset} className="mdl-tabs__tab" id="all-tab">All</p>
          </div>
          </div>
          <div className="projects-grid">
          {this.renderProjects()}
          </div>
      </div>
    )
  }


}

export default Projects;
