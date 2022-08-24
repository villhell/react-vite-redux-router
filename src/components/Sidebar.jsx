import React from 'react';
import {
  Routes,
  Route,
  Outlet,
  Link,
  useMatch,
  useResolvedPath,
} from 'react-router-dom';

import { sidebardata } from './sidebardata';
import SidebarIcon from './SidebarIcon';
import './Sidebar.scss';
import { useRef, useState } from 'react';

function Sidebar() {
  const isExpanded = useRef(localStorage.getItem('isExpanded') === 'true');
  const [expand, setExpand] = useState(true);

  const ToggleMenu = () => {
    isExpanded.current = !isExpanded.current;
    localStorage.setItem('isExpanded', isExpanded.current);
    setExpand(isExpanded.current);
  };

  return (
    <div className="content">
      <aside className={expand ? 'is-expanded' : ''}>
        <SidebarIcon />
        <div className="menu-toggle-wrap">
          <button className="menu-toggle" onClick={ToggleMenu}>
            <span className="material-icons">keyboard_double_arrow_right</span>
          </button>
        </div>
        <h3>Menu</h3>

        <div className="menu">
          {sidebardata.map((value, key) => {
            return (
              <CustomLink key={key} to={value.link} className="button">
                <span className="material-icons">{value.icon}</span>
                <span className="text">{value.title}</span>
              </CustomLink>
            );
          })}
        </div>
        <div className="flex"></div>
        <div className="menu">
          <CustomLink to="/settings" className="button">
            <span className="material-icons">settings</span>
            <span className="text">Settings</span>
          </CustomLink>
        </div>
      </aside>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link
      style={{ backgroundColor: match ? 'rgb(236, 8, 133)' : 'blueviolet' }}
      to={to}
      {...props}
    >
      {children}
    </Link>
  );
}
export default Sidebar;
