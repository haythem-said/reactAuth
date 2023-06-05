import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { LoginAction } from "../actions/AuthActions";
import "../assets/Login.css";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const errorState = useSelector((state) => state.errors);
  console.log(errorState);
  const [errors, setErrors] = useState("");

  const [form, setForm] = useState("");
  const handelLogin = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    setErrors(errorState);
    if (errors) {
      setTimeout(() => {
        setErrors("");
      }, 5000);
    }
  }, [errorState]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(LoginAction(form, navigate));
  };

  return (
    <div className="raws">
      <div className="login-pages">
        <h2>Login Page</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            className="input-fields"
            type="text"
            id="email"
            name="email"
            onChange={handelLogin}
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            className="input-fields"
            type="password"
            id="password"
            name="password"
            onChange={handelLogin}
            required
          />
          <input type="submit" className="login-buttons" value="Se connecter" />
        </form>
        
        
     
        <p className="messages">
          Pas encore inscrit ? <Link to="/register">S'inscrire</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
