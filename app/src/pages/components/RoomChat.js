import React from "react";
import Cards from "./Cards";
import { StaticUrl } from "../../assets/staticUrl/StaticUrl";

const RoomChat = (props) => {
  console.log("StaticUrl", StaticUrl[0]);

  return (
    <div>
      <Cards
        src=""
        altDesc="JsCourse"
        description="JavaScript (JS) is a high-level, interpreted programming language primarily used for creating interactive and dynamic websites."
        readMore="ReadMore..."
      />
       <Cards
        src=""
        altDesc="JsCourse"
        description="JavaScript (JS) is a high-level, interpreted programming language primarily used for creating interactive and dynamic websites."
        readMore="ReadMore..."
      />
       <Cards
        src=""
        altDesc="JsCourse"
        description="JavaScript (JS) is a high-level, interpreted programming language primarily used for creating interactive and dynamic websites."
        readMore="ReadMore..."
      />
    </div>
  );
};

export default RoomChat;
