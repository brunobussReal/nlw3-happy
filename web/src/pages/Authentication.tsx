import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import AuthAsideModel from "../components/AuthAsideModel";
import AuthContext from "../contexts/auth";

import "../styles/pages/authentication-page.css";

function Authentication() {
  const history = useHistory();
  const { signIn, signOut, authenticated } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");

  async function handleSubmit(e: any) {
    e.preventDefault();
    try {
      await signIn(email, password);
      setAuthError("");
      history.push("/user");
    } catch (error) {
      switch (error.response.status) {
        case 401:
          setAuthError("User or Password incorrect");
          break;
        case 409:
          setAuthError("Usuario inexistente");
      }
      setPassword("");
    }
  }

  function handleLogout() {
    signOut();
  }

  return (
    <div id="authentication__page">
      <div className="hero"></div>
      <AuthAsideModel>
        {!authenticated ? (
          <form className="authentication__form" onSubmit={handleSubmit}>
            <fieldset>
              <legend>Login</legend>
              <div className="input-block">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div className="input-block">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
                {authError && (
                  <span className="form-error-span">{authError}</span>
                )}
              </div>
            </fieldset>
            <button className="auth-button" type="submit">
              Login
            </button>
            <div className="authFooter-linkContainer">
              <div className="divider"></div>
              <span>Don't have an account yet?</span>
              <Link className="footer-link" to="/register">
                <span>Create account</span>
              </Link>
            </div>
          </form>
        ) : (
          <div>
            <fieldset>
              <legend>Login</legend>
              <div className="logout-container">
                <h2>Seems like your already logged in</h2>
                <button
                  className="auth-button"
                  type="submit"
                  onClick={handleLogout}
                >
                  Logout?
                </button>

                <button
                  className="auth-button"
                  type="submit"
                  onClick={() => history.push("/")}
                >
                  Continue Session
                </button>
              </div>
            </fieldset>
          </div>
        )}
      </AuthAsideModel>
    </div>
  );
}

export default Authentication;
