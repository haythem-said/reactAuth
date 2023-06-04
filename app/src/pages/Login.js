import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { LoginAction } from "../actions/AuthActions";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const errorState = useSelector((state) => state.errors);
  console.log(errorState)
  const [errors, setErrors] = useState("");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [form, setForm] = useState("");
  const handelLogin = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    setErrors(errorState);
    setTimeout(() => {
      setErrors("");
    }, 5000);
  }, [errorState]);
  // const handleUsernameChange = (e) => {
  //   setUsername(e.target.value);
  // };

  // const handlePasswordChange = (e) => {
  //   setPassword(e.target.value);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(LoginAction(form, navigate));

    // Logique de traitement de la connexion ici
    // console.log('Nom d\'utilisateur :', username);
    // console.log('Mot de passe :', password);
  };

  return (
    <div className="container">
      <h1>Connexion</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Nom d'utilisateur :</label>
        <input
          type="text"
          id="email"
          name="email"
          onChange={handelLogin}
          required
        />
        {errors ? (
          <p
            style={{
              color: "#ff0000",
              "font-size": "14px",
              "margin-top": "2px",
            }}
          >
            {errors.email}
          </p>
        ) : (
          ""
        )}
        <label htmlFor="password">Mot de passe :</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={handelLogin}
          required
        />
        {errors ? (
          <p
            style={{
              color: "#ff0000",
              "font-size": "14px",
              "margin-top": "2px",
            }}
          >
            {errors.password}
          </p>
        ) : (
          ""
        )}
        <input type="submit" value="Se connecter" />
      </form>
      <p className="message">
        Pas encore inscrit ? <Link to="/register">S'inscrire</Link>
      </p>
    </div>
  );
};

export default Login;
