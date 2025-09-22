import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    // const email = e.target.email.value;
    // const password = e.target.password.value;

    console.log(e.target[0].value);
    
    // API call to backend
    // const response = await axios.post(
    //   "http://localhost:3000/api/auth/user/register",
    //   {
    //     name,
    //     email,
    //     password,
    //   },
    //   {
    //     withCredentials: true,
    //   }
    // );
    // console.log(response.data);
    navigate("/");
  };
  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>User Register</h2>
        <form onSubmit={handleSubmit}>
          <input type="name" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Register</button>
        </form>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};


export default Register;
