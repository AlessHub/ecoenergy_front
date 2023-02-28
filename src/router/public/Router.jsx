import React from 'react';


import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import Home from '../../views/Home';
import SignUp from '../../views/SignUp';
import Login from '../../views/Login';
import Advices from '../../views/Advices';

export default class PublicRoute extends React.Component {
    render() {
      return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/login" element={<Login/>}/>
                <Route exact path="/signup" element={<SignUp/>}/>
                <Route exact path="/advices" element={<Advices/>}/>
            </Routes>
        </Router>
      );
    }
  }