import React, { useState } from 'react';
import {Link} from 'react-router-dom'
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [form,setForm]=useState('')
   const handelLogin=(e)=>{
        setForm({
          ...form,
          [e.target.name]:e.target.value
        })
   }
  // const handleUsernameChange = (e) => {
  //   setUsername(e.target.value);
  // };

  // const handlePasswordChange = (e) => {
  //   setPassword(e.target.value);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form)
    // Logique de traitement de la connexion ici
    // console.log('Nom d\'utilisateur :', username);
    // console.log('Mot de passe :', password);
  };

  return (
    <div className="container">
      <h1>Connexion</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Nom d'utilisateur :</label>
        <input
          type="text"
          id="username"
          name="username"
          onChange={handelLogin}
          required
        />

        <label htmlFor="password">Mot de passe :</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={handelLogin}
          required
        />

        <input type="submit" value="Se connecter" />
      </form>
      <p className="message">
        Pas encore inscrit ? <Link to="/register">S'inscrire</Link>
      </p>
    </div>
  );
};

export default Login;
