import React from 'react';
import { sidebardata } from './sidebardata';
import SidebarIcon from './SidebarIcon';
function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarIcon />
      <ul className="sidebar-list">
        {sidebardata.map((value, key) => {
          return (
            <li
              key={key}
              id={window.location.pathname == value.link ? 'active' : ''}
              className="row"
              onClick={() => {
                window.location.pathname = value.link;
              }}
            >
              <div id="icon">
                <span className="material-symbols-outlined">{value.icon}</span>
              </div>
              <div id="title">{value.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
