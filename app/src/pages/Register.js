import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Registration } from "../actions/AuthActions";
import "../assets/Register.css";
const Register = () => {
  const [form, setForm] = useState("");
  const [errors, setErrors] = useState("");
  const errorState = useSelector((state) => state.errors);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handelForm = (e) => {
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
    dispatch(Registration(form, navigate));
  };
  return (
    <div className="raw">
      <div className="login-page">
        <h2>Inscription</h2>
        <form className="form" onSubmit={handleSubmit}>
        <label>Nom</label>
          <input
            className="input-field"
            id="name"
            name="name"
            onChange={handelForm}
            required
          />
          <label>Email</label>
          <input
            className="input-field"
            type="email"
            id="email"
            name="email"
            onChange={handelForm}
            required
          />
          <label >mot de passe :</label>
          <input
            className="input-field"
            type="password"
            id="password"
            name="password"
            onChange={handelForm}
            required
          />
          <label >Confirmer le mot de passe :</label>
          <input
            className="input-field"
            type="password"
            id="confirm"
            name="confirm"
            onChange={handelForm}
            required
          />
          <button type="submit" className="login-button">
          Inscrit
        </button>
        </form>
        
        <p className="message">
          Déjà inscrit ? <Link to="/login">Se connecter</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
