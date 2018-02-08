import React from 'react'
import {connect} from 'react-redux'
import AboutEdit from './AboutEdit'

const AboutView = (props) => {
    return(
      <div id="about">
        <p id="about-description">HELLO. I AM <b id="about-name">MIMI RAHMAN</b>,</p>
        <p id="about-tagline"> A FULL STACK WEB DEVELOPER </p>
        <p id="about-description"> BASED IN NYC </p>
      </div>
    )
  }

const mapStateToProps = ({user}) => {
  return {
    user
  };
};

export default connect(mapStateToProps)(AboutView);
