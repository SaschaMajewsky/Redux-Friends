import React from 'react';
import './App.css';
import { connect } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom"
import { Route } from "react-router-dom";
import Login from "./components/Login"
import PrivateRoute from "./components/PrivateRoute";
import Protected from "./components/Protected";
import { Link } from 'react-router-dom'

class App extends React.Component {

  render() {
    return (
      <Router>
      <div className="App">
        <h1>Redux Friends App</h1>
        <Link to="/home">Home</Link>
        <br/>
        <Link to="/">Friends Area</Link>
        <Route path="/login" component={Login} />
        <PrivateRoute path="/" component={Protected} />
      </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
  }
}

export default connect(mapStateToProps)(App);
