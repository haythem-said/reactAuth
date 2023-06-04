import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique de traitement de l'inscription ici
    console.log('Nom d\'utilisateur :', username);
    console.log('Mot de passe :', password);
    console.log('Confirmation du mot de passe :', confirmPassword);
  };

  return (
    <div className="container">
      <h1>Inscription</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Nom d'utilisateur :</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={handleUsernameChange}
          required
        />

        <label htmlFor="password">Mot de passe :</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />

        <label htmlFor="confirm_password">Confirmer le mot de passe :</label>
        <input
          type="password"
          id="confirm_password"
          name="confirm_password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          required
        />

        <input type="submit" value="S'inscrire" />
      </form>
      <p className="message">
        Déjà inscrit ? <Link to="/login">Se connecter</Link>
      </p>
    </div>
  );
};

export default Register;
