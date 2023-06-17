import React, { Component, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import "../assets/SideBar.css";
import { SET_USER } from "../redux/types";
import ButtonHero from "./components/Button";
const SideBar = () => {
  const [domaineWeb, setDomaineWeb] = useState(false);
  const [domaineMobile, setDomaineMobile] = useState(false);

  const selector = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const UserDispatch = () => {
    localStorage.removeItem("jwt");
    dispatch({
      type: SET_USER,
      payload: {},
    });
  };
  const handelClickWeb = () => {
    setDomaineWeb(!domaineWeb);
  };
  const handelClickMobile = () => {
    setDomaineMobile(!domaineMobile);
  };
  return (
    <div className="sideBar">
      <div className="sideBar__top">
        <h3>Just In Time Training!! </h3>
      </div>
      <div className="sidebar__channels">
        <div className="sideBar__channelsHeader">
          <div className="sideBar__Header">
            <h4>Domaine</h4>
          </div>
          <AddIcon className="sideBar__AddChannel" />
        </div>
        <h4 className="button-domaine" onClick={handelClickWeb}>
          WEB
        </h4>

        {domaineWeb ? (
          <>
            <ButtonHero level={"Bignner"} path="/" />
            <ButtonHero level={"Medium"} path="/meduim" />
            <ButtonHero level={"Hard"} path="/hard" />
          </>
        ) : (
          ""
        )}

        <div className="sidebar__ChannelsList"></div>
      </div>
      <div className="voice">
        <div className="equqipement">
          <span>{selector.user.name}</span>
          <span>Haythem Said</span>
        </div>
        <div className="callUser">
          <SettingsIcon />
          <div className="vertical-space" />
          <LogoutIcon onClick={() => UserDispatch()} />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
