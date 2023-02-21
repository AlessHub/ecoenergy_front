import React from 'react';

import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import Home from '../../views/Home';
import Profile from '../../views/Profile';
import NewPost from '../../views/NewPost'
import Foro from '../../views/foro'
import Advice from '../../views/Advice'

export default class PrivateRoute extends React.Component {
    render() {
      return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/profile" element={<Profile/>}/>
                <Route exact path="/foro" element={<Foro/>}/>
                <Route exact path="/newpost" element={<NewPost/>}/>
                <Route exact path="/advice" element={<Advice/>}/>
            </Routes>
        </Router>
      );
    }
  }