
import React from 'react'
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import Profile from '../../views/Profile';
import Home from '../../views/Home';
import Forum from '../../views/Forum';

import PrivateRoute from '../private/PrivateRoute';
import LoginMui from '../../views/Login';
import SignUp from '../../views/SignUp'
import PostForum from '../../views/PostForum';

import PostAdvice from '../../views/PostAdvice';
import Advice from '../../views/Advice';
import SinglePost from '../../views/SinglePost';
// import PostForo from '../../views/PostForo';

import AdminDashBoard from '../../views/AdminDashBoard';


function PublicRoute() {
  
    
  return (
    <BrowserRouter>
      

      

      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<home />} />
        <Route path="/login" element={<LoginMui />} />
        <Route path="/signup" element={<SignUp />} />
        

        <Route element={<PrivateRoute />}>


          <Route path="/profile" element={<Profile />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/postForum" element={<PostForum />} />
          <Route path="/dashBoard" element={<AdminDashBoard />} />
          {/* <Route path="/postForo" element={<PostForo/>} /> */}
          <Route path="/:id" element={<SinglePost />} />

          <Route path="/advice" element={<Advice />} />
          <Route path="/postadvice" element={<PostAdvice />} />
          

          
        </Route>
       
      </Routes>
    </BrowserRouter>
  )
}

export default PublicRoute


