import React, { useState } from "react";

const Profile = () => {
  const [phone, setPhone] = useState("");
  const [adresse, setAdresse] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");
  const [bio, setBio] = useState("");

  const handlePhoneChange = (e) => {
    
    setPhone(e.target.value);
  };

  const handlePostalCodeChange = (e) => {
    setPostalCode(e.target.value);
  };

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  const handleBioChange = (e) => {
    setBio(e.target.value);
  };
  const handleAdresseChange = (e) => {
    setAdresse(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique de traitement de la mise à jour du profil ici
    console.log("Numéro de téléphone :", phone);
    console.log("Code postal :", postalCode);
    console.log("Pays :", country);
    console.log("Biographie :", bio);
  };

  return (
    <div className="container">
      <h1>Profil</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="phone">Numéro de téléphone :</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={phone}
          onChange={handlePhoneChange}
        />

        <label htmlFor="postalCode">Code postal :</label>
        <input
          type="text"
          id="postalCode"
          name="postalCode"
          value={postalCode}
          onChange={handlePostalCodeChange}
        />

        <label htmlFor="country">Pays :</label>
        <input
          type="text"
          id="country"
          name="country"
          value={country}
          onChange={handleCountryChange}
        />
        <label htmlFor="adresse">adresse :</label>
        <input
          type="text"
          id="adresse"
          name="adresse"
          value={adresse}
          onChange={handleAdresseChange}
        ></input>
        <label htmlFor="bio">Biographie :</label>
        <textarea
          id="bio"
          name="bio"
          value={bio}
          onChange={handleBioChange}
        ></textarea>

        <input type="submit" value="Enregistrer" />
      </form>
    </div>
  );
};

export default Profile;
