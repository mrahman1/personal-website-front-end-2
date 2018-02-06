import React from "react";
import { connect } from "react-redux";
import { createNewProject } from "../../actions";


class ProjectNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      description: null,
      user_id: 1,
      numPages: null,
      pageNumber: 1,
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.createNewProject(this.state);
  };


  onDocumentLoad = ({ numPages }) => {
      this.setState({ numPages });
    }


  render() {

    return (
      <div>

        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="title"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="description"
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => {
  return {
    user
  };
};

export default connect(mapStateToProps, { createNewProject })(ProjectNew);
