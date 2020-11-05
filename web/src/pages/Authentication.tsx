import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../styles/pages/authentication-page.css";

function Authentication() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: any) {
    e.preventDefault();
    console.log({ email, password });
  }

  return (
    <div id="authentication__page">
      <div className="hero"></div>
      <aside>
        <div className="svg-container">
          <svg viewBox="0 0 500 150" preserveAspectRatio="none">
            <path d="M0.00,92.27 C216.83,192.92 304.30,8.39 500.00,109.03 L500.00,0.00 L0.00,0.00 Z" />
          </svg>
        </div>
        <div className="authentication__container">
          <h1>Leve Felicidade para o mundo</h1>
          <form className="auththentication__form" onSubmit={handleSubmit}>
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
              </div>
            </fieldset>
            <button className="login-button" type="submit">
              Login
            </button>
            <div className="register-linkContainer">
              <div className="divider"></div>
              <span>Não possui conta ainda?</span>
              <Link className="signup-link" to="/auth">
                <span>Registre-se</span>
              </Link>
            </div>
          </form>
        </div>
      </aside>
    </div>
  );
}

export default Authentication;
