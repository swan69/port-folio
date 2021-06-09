import React from 'react';
import { NavLink } from 'react-router-dom'

const Navigation = () => {
    return (
        <div className="navigation">
            <ul>
                <NavLink to="/" exact className="hover" activeClassName="nav-active">
                    <li>Accueil</li>
                </NavLink>

                <li className="nav-portfolio">
                    Portfolio
                <ul className="nav-projects">
                    <NavLink to="/project-1" activeClassName="nav-active" className="hover">
                        <li>Project 1</li>
                    </NavLink>
                    <NavLink to="/project-2" activeClassName="nav-active" className="hover">
                        <li>Project 2</li>
                    </NavLink>
                </ul>
                </li>

                <NavLink to="/contact" exact className="hover" activeClassName="nav-active">
                    <li>Contact</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;