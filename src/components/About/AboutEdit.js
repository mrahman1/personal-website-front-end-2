import React from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import RaisedButton from 'material-ui/RaisedButton';

class AboutEdit extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        name: this.props.user.name,
        about: this.props.user.about,
        email: this.props.user.email,
        user_id: 1
      };
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.user.name != nextProps.user.name) {
      this.setState({
        name: nextProps.user.name,
        about: nextProps.user.about,
        email: nextProps.user.email,
        user_id: 1});
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.updateCurrentUser(this.state);
  };


  render() {
    console.log("PROPS",this.props);
    console.log(this.state);
    return (
      <div>
      <RaisedButton label="Default" />
      <h1>About Edit</h1>
      <form onSubmit={this.handleSubmit}>

        <input
          type="text"
          placeholder="name"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input
          type="text"
          placeholder="about"
          name="about"
          value={this.state.about}
          onChange={this.handleChange}
        />
        <input
          type="text"
          placeholder="email"
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
        />
        <input
          type = "submit"
        />
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

export default connect(mapStateToProps, actions)(AboutEdit);
