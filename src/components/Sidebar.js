import React, { Component } from 'react';
import { Navigation, Drawer } from 'react-mdl';
import { Link } from 'react-router-dom';

class Sidebar extends Component {

  render() {
    return (
      <Drawer id="sidebar-navigation" title={<Link style={{color: 'white'}}to="/">Menu</Link>}>
        <Navigation>
            <Link to="/" id="link-sidebar-0">Home</Link>
            <Link to="/about" id="link-sidebar-1">About</Link>
            <Link to="/curriculumvitae" id="link-sidebar-2">Curriculum Vitae</Link>
            <Link to="/projects" id="link-sidebar-3">Projects</Link>
            <Link to="/contact" id="link-sidebar-4">Contact</Link>
        </Navigation>
      </Drawer>
    )
  }

}

export default Sidebar;
