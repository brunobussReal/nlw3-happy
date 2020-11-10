import React from "react";
import "../styles/components/AuthAsideModel.css";

function AuthAsideModel({ children }: any) {
  return (
    <aside className="authAsideModel">
      <div className="svg-container">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none">
          <path d="M0.00,92.27 C216.83,192.92 304.30,8.39 500.00,109.03 L500.00,0.00 L0.00,0.00 Z" />
        </svg>
      </div>
      <div className="main__container">{children}</div>
    </aside>
  );
}

export default AuthAsideModel;
