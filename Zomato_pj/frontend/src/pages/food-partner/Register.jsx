import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>Food Partner Register</h2>
        <form>
          <input type="text" placeholder=" Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Phone" required />
          <input type="password" placeholder="Address" required />
          <input type="password" placeholder="ContactName" required />

          <button type="submit">Register</button>
        </form>
        <p>
          Already have an account? <Link to="/food-partner/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
