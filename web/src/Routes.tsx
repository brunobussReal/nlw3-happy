import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import React, { useContext } from "react";

import Landing from "./pages/Landing";
import OrphanagesMap from "./pages/OrphanagesMap";
import Orphanage from "./pages/Orphanage";
import CreateOrphanage from "./pages/CreateOrphanage";
import Authentication from "./pages/Authentication";
import RegisterUser from "./pages/RegisterUser";
import Dashboard from "./pages/Dashboard";
import AuthContext from "./contexts/auth";

const CustomRoute = ({ isPrivate, ...rest }: any) => {
  const { loading, authenticated } = useContext(AuthContext);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (isPrivate && !authenticated) {
    return <Redirect to="/login" />;
  }

  return <Route {...rest} />;
};

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <CustomRoute path="/" exact component={Landing} />
        <CustomRoute path="/login" exact component={Authentication} />
        <CustomRoute path="/register" exact component={RegisterUser} />
        <CustomRoute isPrivate path="/user" exact component={Dashboard} />

        <CustomRoute path="/app" component={OrphanagesMap} />
        <CustomRoute path="/orphanages/create" component={CreateOrphanage} />
        <CustomRoute path="/orphanage/:id" component={Orphanage} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
