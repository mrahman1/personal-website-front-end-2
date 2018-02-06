import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./store";
import spdf from "simple-react-pdf";
import { database } from "./services/firebase";
import 'semantic-ui-css/semantic.min.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,

  document.getElementById("root")
);
//registerServiceWorker();
