import React from "react";
import { Route, Switch, Router as BrowserRouter } from "react-router-dom";
import apphistory from "../apphistory";
import routes from "./index";
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
      <RouterSwitch />
    </BrowserRouter>
  );
};

export default Router;
