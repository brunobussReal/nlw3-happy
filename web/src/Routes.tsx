import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from "react";

import Landing from "./pages/Landing";
import OrphanagesMap from "./pages/OrphanagesMap";
import Orphanage from "./pages/Orphanage";
import CreateOrphanage from "./pages/CreateOrphanage";
import Authentication from "./pages/Authentication";
import RegisterUser from "./pages/RegisterUser";
import Dashboard from "./pages/Dashboard";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/login" exact component={Authentication} />
        <Route path="/register" exact component={RegisterUser} />
        <Route path="/user" exact component={Dashboard} />

        <Route path="/app" component={OrphanagesMap} />
        <Route path="/orphanages/create" component={CreateOrphanage} />
        <Route path="/orphanage/:id" component={Orphanage} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
