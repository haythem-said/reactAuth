import React from 'react'
import SideBar from './components/SideBar'
import '../assets/Profile.css'
import { useSelector } from 'react-redux';
import RoomChat from './components/RoomChat';
const Profile = () => {
 
  return (
    <div className='chat'>
      <SideBar />
      <RoomChat />
    </div>
  )
}

export default Profile
