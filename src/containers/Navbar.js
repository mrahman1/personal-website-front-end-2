import React from "react";
import { connect } from "react-redux";
import { Menu } from 'semantic-ui-react'
import { Link } from "react-router-dom";

const Navbar = props => {
  return (
        <Menu inverted vertical id="navbar">
        <img src='https://lh3.googleusercontent.com/ur0mm9gsAAFFIMCkGz7hWJdk5x2LkO_Jwr4AqT7mOy7CUZhSX2zyjjK2fn8bZ7A3oBg=w300' id="logo"/>

          <Link to="/about">
            {" "}
            <Menu.Item name ="About Me" />
          </Link>
          <Link to="/resume">
            <Menu.Item name="Work Experience" />{" "}
          </Link>
          <Link to="/projects">
            <Menu.Item name="Projects" />{" "}
          </Link>
          <Link to="/contact">
            <Menu.Item name="Contact" />{" "}
          </Link>
        </Menu>
  );
};

export default Navbar;
