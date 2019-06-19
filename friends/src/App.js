import React from 'react';
import './App.css';
import { friendsReducer } from './reducers/friendsReducer';
import { connect } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom"
import { Route } from "react-router-dom";
import Login from "./components/Login"

function App() {
  return (
    <Router>
    <div className="App">
      <Route path="/login" component={Login}/>
    </div>
    </Router>
  );
}

const mapStateToProps = state => {
  console.log(state);
  return {}
}

export default connect(mapStateToProps, {})(App);
