import React from 'react';
import './App.css';
import { friendsReducer } from './reducers/friendsReducer';
import { connect } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom"
import { Route } from "react-router-dom";
import Login from "./components/Login"
import PrivateRoute from "./components/PrivateRoute";
import Protected from "./components/Protected";
import { Link } from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
      <h1>Redux Friends App</h1>
      <Link to="/home">Home</Link>
      <br/>
      <Link to="/protected">Friends Area</Link>
      <Route path="/login" component={Login} />
      <PrivateRoute path="/protected" component={Protected} />
    </div>
    </Router>
  );
}

const mapStateToProps = state => {
  console.log(state);
  return {}
}

export default connect(mapStateToProps, {})(App);
