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

function Sidebar() {
  return (
    <div>
      <div className="sidebar">
        <nav>
          <SidebarIcon />
          <ul className="sidebar-list">
            {sidebardata.map((value, key) => {
              return (
                <li key={key}>
                  <CustomLink to={value.link} className="row">
                    <div className="icon">
                      <span className="material-symbols-outlined">
                        {value.icon}
                      </span>
                    </div>
                    <div className="title">{value.title}</div>
                  </CustomLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <Outlet />
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
