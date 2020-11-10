import React, { FormEvent, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import AuthAsideModel from "../components/AuthAsideModel";

import "../styles/pages/RegisterUser.css";
import api from "../services/api";

function RegisterUser() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [registerError, setRegisterError] = useState("");

  const handleRegisterUser = async (event: FormEvent) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setConfirmPassword("");
      return alert("As passwords estão diferentes");
    }
    const data = { name, email, password };
    try {
      await api.post("register", data);
      history.replace("/");
    } catch (error) {
      if (error.response.status === 409) {
        setRegisterError("Email já registrado, experimente iniciar sessão");
      } else if (error.response.data.errors.password) {
        setRegisterError("Password deve conter no minimo 8 caracteres");
      }
    }
  };

  return (
    <div id="register__page">
      <div className="hero"></div>
      <AuthAsideModel className="register__asideModel">
        <form className="register__form" onSubmit={handleRegisterUser}>
          <fieldset>
            <legend>Criar Conta</legend>
            <div className="input-block">
              <label htmlFor="name">Nome</label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
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

            <div className="input-block">
              <label htmlFor="confirm-password">Confirme a Password</label>
              <input
                id="confirm-password"
                type="password"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
              />
            </div>
            {registerError && (
              <span className="form-error-span">{registerError}</span>
            )}
          </fieldset>
          <button className="login-button" type="submit">
            Criar Conta
          </button>
          <div className="footer-linkContainer">
            <div className="divider"></div>
            <span>Já possui conta?</span>
            <Link className="footer-link" to="/login">
              <span>Login</span>
            </Link>
          </div>
        </form>
      </AuthAsideModel>
    </div>
  );
}

export default RegisterUser;
