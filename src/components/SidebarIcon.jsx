import React from 'react';
import Icon from '../assets/react.svg';
import './SidebarIcon.scss';
function SidebarIcon() {
  return (
    <div className="sidebar-icon">
      <img src={Icon} />
      <p className="sidebar-icon-title">Sample</p>
    </div>
  );
}

export default SidebarIcon;
