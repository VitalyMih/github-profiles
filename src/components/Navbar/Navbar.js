import './Navbar.css';
import React from "react";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className="Navbar">
            <div className="Navbar_container">
                <div className="Navbar_logo">Github Profile</div>
                <ul className="Navbar_list">
                    <li>
                        <NavLink to="/">Главная</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">Информация</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;