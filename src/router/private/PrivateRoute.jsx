import React from 'react';
import { Route, Navigate } from 'react-router-dom';

function PrivateRoute({ element: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      element={
        authenticated ? (
          <Component />
        ) : (
          <Navigate to={{ pathname: '/login', state: { from: rest.location } }} />
        )
      }
    />
  );
}

export default PrivateRoute
