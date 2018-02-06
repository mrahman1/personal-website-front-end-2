import React from 'react'
import {connect} from 'react-redux'
import AboutEdit from './AboutEdit'

const AboutView = (props) => {
    return(
      <div>
        <p> About </p>
      </div>
    )
  }

const mapStateToProps = ({user}) => {
  return {
    user
  };
};

export default connect(mapStateToProps)(AboutView);
