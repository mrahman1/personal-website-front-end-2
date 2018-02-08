import React from "react";
import { connect } from "react-redux";
import { Menu, Label } from 'semantic-ui-react'
import { Link } from "react-router-dom";

const Navbar = props => {
  return (
        <Menu vertical className="navbar">
        <img src='https://cdn.pixabay.com/photo/2014/04/02/10/45/parking-304464_960_720.png' id="logo"/>

          <Link to="/about">
          <Menu.Item id="about-item" className="menu-item">
            ABOUT
          </Menu.Item>
          </Link>

          <Link to="/resume">
            <Menu.Item id="resume-item" className="menu-item">EXPERIENCE</Menu.Item>
          </Link>
          <Link to="/projects">
            <Menu.Item id="projects-item" className="menu-item">PROJECTS</Menu.Item>
          </Link>
          <Link to="/contact">
            <Menu.Item id="contact-item" className="menu-item">CONTACT</Menu.Item>
          </Link>
        </Menu>
  );
};

export default Navbar;
