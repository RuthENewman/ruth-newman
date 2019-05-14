import React, { Component } from 'react';
import './App.css';
import Main from './components/main';
import { Link } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';

class App extends Component {
  constructor() {
    super()


  }

    showSidebar = () => {
      return <Sidebar />
    }

  render() {
    return (
        <div>
        <Layout>
            <Header id="header-colour" title={<Link to="/"></Link>}>
                <Navigation id="navBar">
                    <Link to="/" id="link-navbar-0">Home</Link>
                    <Link to="/about" id="link-navbar-1">About</Link>
                    <Link to="/curriculumvitae" id="link-navbar-2">CV</Link>
                    <Link to="/projects" id="link-navbar-3">Projects</Link>
                    <Link to="/contact" id="link-navbar-4">Contact</Link>
                </Navigation>
            </Header>


            <Content>
              <div className="page-content">
              <Main showSidebar={this.showSidebar}/>
              </div>
            </Content>
        </Layout>
        </div>


    );
  }
}

export default App;
