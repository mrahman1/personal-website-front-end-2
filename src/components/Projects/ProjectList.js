import React from "react";
import { connect } from "react-redux";
import ProjectNew from "./ProjectNew";
import ProjectListItem from "./ProjectListItem";
import { GridList, GridTile } from "material-ui/GridList";
import IconButton from "material-ui/IconButton";
import Subheader from "material-ui/Subheader";
import StarBorder from "material-ui/svg-icons/toggle/star-border";

const ProjectList = props => {
  const listOfProjects = () => {
    if (props.user && props.user.projects.length > 0) {
      return props.user.projects.map((project, index) => (
        <ProjectListItem project={project} key={index} />
      ));
    }
  };

  const styles = {
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around"
    },
    gridList: {
      width: 500,
      height: 450,
      overflowY: "auto"
    }
  };

  return <div id="project-list">{listOfProjects()}</div>;
};

const mapStateToProps = ({ user }) => {
  return {
    user
  };
};

export default connect(mapStateToProps)(ProjectList);
