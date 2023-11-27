import React from "react";
import "../style/login.css";

function Login() {
  return (
    <div>
      <div class="login-container">
        <div class="login-body">
          <div class="login-form-header">
            <h2>Login</h2>
          </div>

          <div class="login-form">
            <input type="text" class="login-form-input" placeholder="Email" />
            <input
              type="password"
              class="login-form-input"
              placeholder="Password"
            />
            <button class="login-form-btn">Sign In</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
