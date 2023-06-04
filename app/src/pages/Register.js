import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Registration } from "../actions/AuthActions";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [form, setForm] = useState("");
  const [errors, setErrors] = useState("");
  const errorState = useSelector((state) => state.errors);
  const navigate=useNavigate()
  const dispatch = useDispatch();
  const handelForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    setErrors(errorState);
    setTimeout(()=>{
      setErrors('')
    },5000)
  }, [errorState]);
  // const handleUsernameChange = (e) => {
  //   setUsername(e.target.value);
  // };
  // const handleEmailChange = (e) => {
  //   setEmail(e.target.value);
  // };
  // const handlePasswordChange = (e) => {
  //   setPassword(e.target.value);
  // };
  // const handleConfirmPasswordChange = (e) => {
  //   setConfirmPassword(e.target.value);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(Registration(form,navigate));
    // Logique de traitement de l'inscription ici
    // console.log("Nom d'utilisateur :", username);
    // console.log("Mot de passe :", password);
    // console.log("Confirmation du mot de passe :", confirmPassword);
  };
  return (
    <div className="container">
      <h1>Inscription</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nom d'utilisateur :</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={handelForm}
          required
        />
        <label htmlFor="email">Email d'utilisateur :</label>

        <input
          type="text"
          id="email"
          name="email"
          onChange={handelForm}
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
          onChange={handelForm}
          required
        />

        <label htmlFor="confirm">Confirmer le mot de passe :</label>
        <input
          type="password"
          id="confirmconfirm"
          name="confirm"
          onChange={handelForm}
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
            {errors.confirm}
          </p>
        ) : (
          ""
        )}

        <input type="submit" value="S'inscrire" />
      </form>
      <p className="message">
        Déjà inscrit ? <Link to="/login">Se connecter</Link>
      </p>
    </div>
  );
};

export default Register;
