import React from "react";
import { StaticUrlHard } from "../../assets/staticUrl/StaticUrl";
import Cards from "./Cards";

const HardProfile = () => {
  return (
    <div>
      {StaticUrlHard.map((e) => (
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

export default HardProfile;
