import React from "react";
import "../../assets/Button.css";
import { Link } from "react-router-dom";
const ButtonHero = ({ level, path }) => {
  return (
    <div>
      <Link to={path}>
        <button className="button-hero">{level}</button>
      </Link>
    </div>
  );
};

export default ButtonHero;
