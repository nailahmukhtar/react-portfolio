import React, { Component } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import M from 'materialize-css';
import './styles/Styles.css'

function NavTabs() {

    const location = useLocation();

    React.useEffect(() => {
        M.AutoInit();
      }, []);

        return (
            <div>
                <nav className="nav-wrapper">
                    <a href="/" className="center">Nailah Mukhtar // React Dev</a>
                    <a href="#" data-target="slide" className="sidenav-trigger show-on-large"><i className="material-icons">menu</i></a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li className={location.pathname === '/' ? 'active' : ''}>
                            <NavLink 
                                to="/" 
                                end
                                >
                                Home
                            </NavLink>
                        </li>
                        <li className={location.pathname === '/projects' ? 'active' : ''}>
                            <NavLink
                            to="projects"
                            >
                            Projects
                            </NavLink>
                        </li>
                        <li className={location.pathname === '/contact' ? 'active' : ''}>
                            <NavLink
                            to="contact"
                            end
                            >
                            Contact
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <ul className="sidenav" id="slide">
                    <li><a href="/react-portfolio/">Home</a></li>
                    <li><a href="/react-portfolio/projects">Projects</a></li>
                    <li><a href="/react-portfolio/contact">Contact</a></li>
                </ul>
            </div>
        );
    }

export default NavTabs;
