import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";
import Home from "views/pages/Home";
import Teste from "views/pages/Teste";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* <Route path="/admin" render={props => <AdminLayout {...props} />} /> */}
      <Route path="/auth" render={props => <AuthLayout {...props} />} />
      {/* <Route path="/home" render={props => <Home {...props} />} /> */}
      {/* <Route path="/teste" render={props => <Teste {...props} />} /> */}

      <Redirect from="*" to="/auth/home" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
