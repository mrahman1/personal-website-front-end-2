import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Main from "./containers/Main";
import Navbar from "./containers/Navbar";
import { connect } from "react-redux";
import * as actions from "./actions/index";
import { withRouter } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

class App extends Component {
  componentWillMount() {
    this.props.getCurrentUser();
  }

  render() {
    return (
        <MuiThemeProvider>
        <div className="app">
          <Navbar />
          <Main />
        </div>
       </MuiThemeProvider>
    );
  }
}

const mapStateToProps = state => ({
  state
});

export default withRouter(connect(mapStateToProps, actions)(App));
