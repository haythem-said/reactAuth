import React from "react";
import { StaticUrlMedium } from "../assets/staticUrl/StaticUrl";
import Cards from "./components/Cards";
import SideBar from "./components/SideBar";

const Medium = () => {
  return (
    <div>
      <SideBar />

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

export default Medium;
