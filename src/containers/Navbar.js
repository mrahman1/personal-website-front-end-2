import React from "react";
import { connect } from "react-redux";
import { Menu, Label } from 'semantic-ui-react'
import { Link } from "react-router-dom";

const Navbar = props => {
  return (
        <Menu vertical className="navbar">
        <img src='https://lh3.googleusercontent.com/ur0mm9gsAAFFIMCkGz7hWJdk5x2LkO_Jwr4AqT7mOy7CUZhSX2zyjjK2fn8bZ7A3oBg=w300' id="logo"/>

          <Link to="/about">
          <button id="about-item" className="menu-item">
            ABOUT
          </button>
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
