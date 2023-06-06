import React from 'react'
import SideBar from './components/SideBar'
import '../assets/Profile.css'
import { useSelector } from 'react-redux';
const Profile = () => {
 
  return (
    <div className='chat'>
      <SideBar />
      <p>Chat Room</p>
    </div>
  )
}

export default Profile
