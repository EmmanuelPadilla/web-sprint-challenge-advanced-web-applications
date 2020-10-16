import React from "react";
import { Redirect, Route } from "react-router-dom";
//Requirements:L
//1. it has to have the same API as <route/> (same props as route)
//2. It has to render a <route> componenet and passes all the props through it.
// It checks if the user is authenticated, if they are, it renders the
// component prop. if not, redirects user to login

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        if (localStorage.getItem("token")) {
          return <Component />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};
export default PrivateRoute;
