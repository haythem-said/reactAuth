import React from "react";
import "../../assets/Cards.css";

const Cards = ({ src, altDesc, description }) => {
  return (
    <div className="chat-room">
      <div className="card">
        <img
          className="image"
          src={src}
          alt={altDesc}
          width={100}
          height={100}
        />
        <p>{description}</p>
        <button className="buttonCard">ReadMore</button>
      </div>
    </div>
  );
};

export default Cards;
