import React from "react";
import "../styles/pages/landing.css";
import logo from "../images/logo.svg";

import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

function Landing() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logo} alt="Happy logo" />
        <main>
          <h1>Bring Happines to the World</h1>
          <p>Visit orphanages and change many children's day.</p>
        </main>
        <div className="location">
          <strong>Portugal </strong>
          <span>Famalicão</span>
        </div>
        <Link to="/app" className="enter-app">
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
        </Link>

        <Link to="/login" className="enter-login">
          <p>Login</p>
        </Link>
      </div>
    </div>
  );
}

export default Landing;
