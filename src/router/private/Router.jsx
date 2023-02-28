import React from 'react';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from '../../views/Home';
import Profile from '../../views/Profile';
import NewPost from '../../views/NewPost';
import Forum from '../../views/Forum';
import Advice from '../../views/Advice';
import Login from '../../views/Login';
import PrivateRoute from './PrivateRoute';

export default function AppRouter({ authenticated }) {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <PrivateRoute authenticated={authenticated} exact path="/profile/:name" element={<Profile />} />
        <PrivateRoute exact path="/forum" element={<Forum />} />
        <PrivateRoute authenticated={authenticated} exact path="/newpost" element={<NewPost />} />
        <PrivateRoute authenticated={authenticated} exact path="/advice" element={<Advice />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}