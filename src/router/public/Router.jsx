import React,{useState} from 'react'
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Profile from '../../views/Profile';
import Home from '../../views/Home';
import Forum from '../../views/Forum';
import PrivateRoute from '../private/PrivateRoute';
import LoginMui from '../../views/Login';
import SignUp from '../../views/SignUp'

function PublicRoute() {
  
    const [user, setUser] = useState(null);

  const login = () =>
    setUser({
      id: 1,
      name: "Eberth",
      permissions: ["quantum"],
      roles: ["admin"],
    });
  const logout = () => setUser(null);

  return (
    <BrowserRouter>
      

      

      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<home />} />
        <Route path="/login" element={<LoginMui />} />
        <Route path="/signup" element={<SignUp />} />

        <Route element={<PrivateRoute isAllowed={!!user} />}>

          <Route path="/profile" element={<Profile />} />
          <Route path="/Forum" element={<Forum />} />
          
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
