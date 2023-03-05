
import React,{useState} from 'react'
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import Profile from '../../views/Profile';
import Home from '../../views/Home';
import Forum from '../../views/Forum';

import PrivateRoute from '../private/PrivateRoute';
import LoginMui from '../../views/Login';
import SignUp from '../../views/SignUp'
import PostForum from '../../views/PostForum';
import Advices from '../../views/Advices'
import PostAdvice from '../../views/PostAdvice';

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
          <Route path="/Forum" element={<Forum />} />
          <Route path="/postForum" element={<PostForum />} />
          <Route path="/advices" element={<Advices />} />
          <Route path="/postadvice" element={<PostAdvice />} />
          
          
        </Route>
        {/* <Route
          path="/analytics"
          element={
            <ProtectedRoute
              redirectTo="/home"
              isAllowed={!!user && user.permissions.includes("analize")}
            >
              <Analytics />
            </ProtectedRoute>
          }
        /> */}
        {/* <Route
          path="/admin"
          element={
            <ProtectedRoute
              redirectTo="/home"
              isAllowed={!!user && user.roles.includes("admin")}
            >
              <Admin />
            </ProtectedRoute>
          }
        /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default PublicRoute

