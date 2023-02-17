import React from 'react';

import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import Home from '../../views/Home';
import WelcomeMui from '../../views/Welcome';

export default class PublicRoute extends React.Component {
    render() {
      return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/Login" element={<Login/>}/>
                <Route exact path="/Welcome" element={<WelcomeMui/>}/>
            </Routes>
        </Router>
      );
    }
  }