import React from 'react';
import { NavLink } from 'react-router-dom';

function NavTabs() {
  return (
    <nav>
        <div className='nav-wrapper'>
            <ul className="right hide-on-med-and-down">
            <li className="nav-item">
                <NavLink
                to="/"
                end
                className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                }
                >
                Home
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink
                to="projects"
                className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                }
                >
                Projects
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink
                to="contact"
                end
                className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                }
                >
                Contact
                </NavLink>
            </li>
            </ul>
        </div>
    </nav>
  );
}

export default NavTabs;
