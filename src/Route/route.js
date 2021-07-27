import React from "react";
import { Route, Switch, Router as BrowserRouter } from "react-router-dom";
import NavBar from 'modulus/navBar'
import Footer from "modulus/footer";

import apphistory from "../apphistory";
import routes from "./";
function RouterSwitch() {
  return (
    <Switch>
      {routes.map(({ ...rest }, index) => {
        return <Route key={index} {...rest} />;
      })}
    </Switch>
  );
}

const Router = () => {
  return (
    <BrowserRouter history={apphistory}>
      <NavBar history={apphistory} />
      <RouterSwitch />
      <Footer/>
    </BrowserRouter>
  );
};

export default Router;
