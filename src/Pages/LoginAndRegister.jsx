import React from "react";
import "./CSS/LoginAndRegister.css";

const LoginAndRegister = () => {
  return (
    <div className="login-register">
      <div className="login-register-container">
        <h1>Register</h1>
        <div className="login-register-field">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <input type="password" placeholder="Password" />
        </div>

        <div className="agree">
          <input type="checkbox" name="" id="" />
          <p>By contiuning, I agree to the terms and conditions.</p>
        </div>

        <button>Continue</button>

        <p className="login">
          Already have an account? <span>Login Here</span>
        </p>
      </div>
    </div>
  );
};

export default LoginAndRegister;
