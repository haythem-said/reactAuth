import React, { Component } from "react";
import { useDispatch, useSelector } from "react-redux";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AddIcon from "@mui/icons-material/Add";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import CallIcon from "@mui/icons-material/Call";
import DoNotDisturbOnIcon from "@mui/icons-material/DoNotDisturbOn";
import MicIcon from "@mui/icons-material/Mic";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import "../../assets/SideBar.css";
import { SET_USER } from "../../redux/types";
const SideBar = () => {
  const selector = useSelector((state) => state.auth);
  const dispatch=useDispatch()
  const UserDispatch =()=>{
    localStorage.removeItem('jwt');
    dispatch({
        type: SET_USER,
        payload: {},
      });
  }

  return (
    <div className="sideBar">
      <div className="sideBar__top">
        <h3>Discord </h3>
        <KeyboardArrowDownIcon />
      </div>
      <div className="sidebar__channels">
        <div className="sideBar__channelsHeader">
          <div className="sideBar__Header">
            <KeyboardArrowDownIcon />
            <h4>Text Channels</h4>
          </div>
          <AddIcon className="sideBar__AddChannel" />
        </div>
        <div className="sidebar__ChannelsList"></div>
      </div>
      <div className="voice">
        <div className="connection">
          <SignalCellularAltIcon />
        </div>
        <div className="voiceConnected">
          <span>Voice</span> Connected
        </div>
        <div className="call">
          <DoNotDisturbOnIcon />
          <div className="vertical-space" />

          <CallIcon />
        </div>
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
