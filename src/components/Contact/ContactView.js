import React from 'react'
import {connect} from 'react-redux'
import ContactEdit from './ContactEdit'

const ContactView = (props) => {
    return(
      <div id="contact">
        <h1> Contact Me </h1>
        <h2> {props.user.name} </h2>
        <h2> {props.user.email} </h2>
      </div>
    )
  }

const mapStateToProps = ({user}) => {
  return {
    user
  };
};

export default connect(mapStateToProps)(ContactView);
