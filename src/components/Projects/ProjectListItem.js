import React from "react";
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";

const ProjectListItem = props => {
  console.log("IN LIST ITEM!!!!", props);
  return (
    <Card>
      <CardHeader
        title={props.project.title}
        actAsExpander={true}
        showExpandableButton={true}
      />
      <CardActions>
        <FlatButton label="Action1" />
        <FlatButton label="Action2" />
      </CardActions>
      <CardText expandable={true}>
      {props.project.description}
      </CardText>
    </Card>
  );
};

export default ProjectListItem;
