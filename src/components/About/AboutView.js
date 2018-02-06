import React from 'react'
import {connect} from 'react-redux'
import AboutEdit from './AboutEdit'

const AboutView = (props) => {
    return(
      <div id="about">
        <h1 id="tagline"> I am a full stack web developer</h1>
      </div>
    )
  }

const mapStateToProps = ({user}) => {
  return {
    user
  };
};

export default connect(mapStateToProps)(AboutView);
