import React from 'react';

import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import Home from '../../views/Home';
import Login from '../../views/Login';
import WelcomeMui from '../../views/Welcome';

export default class PublicRoute extends React.Component {
    render() {
      return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/Login" element={<Login/>}/>
                <Route path="/Welcome" element={<WelcomeMui/>}/>
            </Routes>
        </Router>
      );
    }
  }