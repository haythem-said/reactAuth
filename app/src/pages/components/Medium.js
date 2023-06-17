import React from "react";
import { StaticUrlMedium } from "../../assets/staticUrl/StaticUrl";
import Cards from "./Cards";
import SideBar from "../SideBar";

const MediumProfile = () => {
  return (
    <div>
      {StaticUrlMedium.map((e) => (
        <Cards
          src={e.url}
          altDesc={e.altDesc}
          description={e.description}
          readMore={e.readMore}
        />
      ))}
    </div>
  );
};

export default MediumProfile;
