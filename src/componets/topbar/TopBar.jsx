import React from 'react';
import './topbar.css'
import {NotificationsNone , Language , Settings} from '@mui/icons-material';
import avatarImage from  '/react-admin-panel/src/assets/avatar.jpg';

export default function TopBar() {
  return (
    <div className= "topbar">
        <div className="topbarWrapper">
          <div className="leftTop">
            <span className="logo">AdminPanel</span>
          </div>
          <div className="rightTop">
            <div className="topbariconContainer">
              <NotificationsNone/>
              <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbariconContainer">
              <Language/>
            </div>
            <div className="topbariconContainer">
            <Settings/>
            </div>
            <img src={avatarImage} alt="Avatar" className="topAvatar" />
          </div>
        </div>
    </div>
  )
}
