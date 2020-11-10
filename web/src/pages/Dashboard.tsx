import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../contexts/auth";
import api from "../services/api";

function Dashboard() {
  const [user, setUser] = useState();

  useEffect(() => {
    async function getUser() {
      try {
        const response = await api.get("user");
        console.log(response);
      } catch (error) {
        console.log(error.response.data);
      }
    }
    getUser();
  }, []);
  return (
    <div>
      <h1>Welcome to dashboard</h1>
    </div>
  );
}

export default Dashboard;
