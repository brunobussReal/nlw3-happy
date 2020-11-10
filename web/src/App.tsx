import React from "react";
import "./styles/global.css";
import "leaflet/dist/leaflet.css"; //leaftlet default styling

import Routes from "./Routes";
import { AuthProvider } from "./contexts/auth";

function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
