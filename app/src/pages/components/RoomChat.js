import React from "react";
import Cards from "./Cards";
import { StaticUrlBeginner } from "../../assets/staticUrl/StaticUrl";
const RoomChat = (props) => {

  return (
    <div>
      {StaticUrlBeginner.map((e) => (
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

export default RoomChat;
