import React from "react";
import SideBar from "./SideBar";
import "../assets/Profile.css";
import BegginerProfile from "./components/Begginner";
import MediumProfile from "./components/Medium";
const ProfileBegginner = () => {
  return (
    <div className="chat">
      <SideBar />
      <BegginerProfile />
    </div>
  );
};

export default ProfileBegginner;
