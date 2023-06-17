import React from "react";
import SideBar from "./SideBar";
import "../assets/Profile.css";
import MediumProfile from "./components/Medium";
import HardProfile from "./components/Hard";
const ProfileHard = () => {
  return (
    <div className="chat">
      <SideBar />
      <HardProfile />
    </div>
  );
};

export default ProfileHard;
