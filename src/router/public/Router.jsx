import React from 'react';

import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import Home from '../../views/Home';
import Login from '../../views/Login'
export default class PublicRoute extends React.Component {
    render() {
      return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                {/* <Route exact path="/" element={<Login/>}/> */}
            </Routes>
        </Router>
      );
    }
  }