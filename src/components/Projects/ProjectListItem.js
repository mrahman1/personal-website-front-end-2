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
import { Icon } from 'semantic-ui-react'

const ProjectListItem = props => {


  return (
    <Card>
      <CardHeader
        actAsExpander={true}
        showExpandableButton={true}
        >
        {props.project.title}
      </CardHeader>
      <CardMedia>
        <iframe width="480" height="270" src={props.project.demo} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </CardMedia>
      <CardActions>
        <Icon name='github'/>
        <FlatButton label="Demo" />
      </CardActions>
      <CardText expandable={true}>
      {props.project.description}
      </CardText>
    </Card>
  );
};

export default ProjectListItem;
