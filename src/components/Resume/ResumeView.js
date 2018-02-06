import React from 'react'
import {connect} from 'react-redux'

const ResumeView = (props) => {
    return(
      <div>
      <iframe src="https://drive.google.com/file/d/1zC0ZpEXZgdVobMWGZFHs8jJDnKsItqHm/preview" width="640" height="480"></iframe>
      </div>
    )
  }

const mapStateToProps = ({user}) => {
  return {
    user
  };
};

export default connect(mapStateToProps)(ResumeView);
