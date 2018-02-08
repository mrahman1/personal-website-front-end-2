import React from 'react'
import {connect} from 'react-redux'
import ContactEdit from './ContactEdit'
import { Icon } from 'semantic-ui-react'

const ContactView = (props) => {
    return(
      <div>
      <h1 id="contact-headline"> GET IN TOUCH </h1>
      <div id="contact">
        <Icon name='linkedin' size='massive'/>
        <Icon name='mail' size='massive'/>
        <Icon name='github' size='massive'/>
      </div>
      </div>
    )
  }

const mapStateToProps = ({user}) => {
  return {
    user
  };
};

export default connect(mapStateToProps)(ContactView);
