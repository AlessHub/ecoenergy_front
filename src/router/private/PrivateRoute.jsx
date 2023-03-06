
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ component: component, ...rest }) => {
  const token = localStorage.getItem("token");
  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;

// import React from 'react';
// import { Route, Navigate, Routes } from 'react-router-dom';

// const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
//   <Routes>

//   <Route {...rest} render={(props) => (
//     isAuthenticated
//     ? <Component {...props} />
//     : <Navigate to="/login" />
//     )} />
//     </Routes>
// );

// export default PrivateRoute;




//new request


// import { useState,useEffect } from "react";
// import { Navigate, Outlet } from "react-router-dom";
// import axios from "axios";

// // const PrivateRoute = ({ component: Component, ...rest }) => {
// //   const [isLoggedIn, setIsLoggedIn] = useState(false);

// //   useEffect(() => {
// //     const checkLoggedIn = async () => {
// //       try {
// //         const response = await axios.get("http://localhost:8000/api/checkLoggedIn");
// //         setIsLoggedIn(response.data.loggedIn);
// //       } catch (error) {
// //         setIsLoggedIn(false);
// //       }
// //     };

// //     checkLoggedIn();
// //   }, []);

// //   return isLoggedIn ? <Component {...rest} /> : <Navigate to="/login" />;
// // };

// // export default PrivateRoute;

