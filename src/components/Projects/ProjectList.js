import React from "react";
import { connect } from "react-redux";
import ProjectNew from "./ProjectNew";
import ProjectListItem from "./ProjectListItem";
import { GridList, GridTile } from "material-ui/GridList";
import IconButton from "material-ui/IconButton";
import Subheader from "material-ui/Subheader";
import StarBorder from "material-ui/svg-icons/toggle/star-border";

const ProjectList = props => {

  let fixedList = [
    { title: "CuddleGram",
      demo: "https://www.youtube.com/embed/vlcGRJG7a8A",
      github: "https://github.com/yassimortensen/Cuddlegram",
      description: "Social media website"
    },
    { title: "Trumpet",
      demo: "https://youtu.be/vlcGRJG7a8A",
      github: "https://github.com/yassimortensen/Cuddlegram",
      description: "Social media website"
    },
]

  const listOfProjects = () => {
      return fixedList.map((project, index) => (
        <ProjectListItem project={project} key={index} />
      ));
  };


  return <div id="project-list">
  {listOfProjects()}</div>;
};

const mapStateToProps = ({ user }) => {
  return {
    user
  };
};

export default connect(mapStateToProps)(ProjectList);
