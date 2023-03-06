
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ component: component, ...rest }) => {
  const token = localStorage.getItem("token");
  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;


// import React, { useState, useEffect } from "react";

// import axios from "axios";

// const PrivateRoute = ({ component: Component, ...rest }) => {
//   const [isValidToken, setIsValidToken] = useState(false);
//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     const checkTokenValidity = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:8000/api/forums",
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );
//         setIsValidToken(true);
//       } catch (error) {
//         setIsValidToken(false);
//       }
//     };
//     checkTokenValidity();
//   }, [token]);

//   return isValidToken ? <Component {...rest} /> : <Navigate to="/login" />;
// };

// export default PrivateRoute;
