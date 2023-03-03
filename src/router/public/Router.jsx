import React from 'react';


import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import Home from '../../views/Home';
import SignUp from '../../views/SignUp';

import Login from '../../views/Login'
import Profile from '../../views/Profile';
import Forum from '../../views/Forum';
import Advices from '../../views/Advices';


export default class PublicRoute extends React.Component {
    render() {
      return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/login" element={<Login/>}/>
                <Route exact path="/signup" element={<SignUp/>}/>

                <Route exact path="/profile" element={<Profile/>}/>
                <Route exact path="/forumpost" element={<Forum/>}/>
                <Route exact path="/advices" element={<Advices/>}/>

            </Routes>
        </Router>
      );
    }
  }