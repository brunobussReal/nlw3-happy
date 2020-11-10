import React, { createContext, useEffect, useState } from "react";
import api from "../services/api";
import history from "./history";

interface AuthContextData {
  user: User | null;
  signIn(email: string, password: string): Promise<void>;
  signOut(): void;
  authenticated: boolean;
  loading: boolean;
}
interface User {
  name: string;
  email: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState<null | User>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        api.defaults.headers.Authorization = `Bearer${JSON.parse(token)}`;
        setAuthenticated(true);
      }
    } catch {}
    setLoading(false);
  }, []);

  async function signIn(email: string, password: string) {
    const userData = { email: email, password: password };

    const response = await api.post("authenticate", userData);
    setUser(response.data.user);
    setAuthenticated(true);
    localStorage.setItem("token", JSON.stringify(response.data.token));
    api.defaults.headers.Authorization = `Bearer${response.data.token}`;
  }
  async function signOut() {
    setUser(null);
    setAuthenticated(false);
    localStorage.removeItem("token");
    api.defaults.headers.Authorization = undefined;
    history.push("/login");
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        signOut,
        authenticated,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
