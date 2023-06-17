import React from "react";
import SideBar from "./SideBar";
import "../assets/Profile.css";
import MediumProfile from "./components/Medium";
const ProfileMedium = () => {
  return (
    <div className="chat">
      <SideBar />
      <MediumProfile />
    </div>
  );
};

export default ProfileMedium;
