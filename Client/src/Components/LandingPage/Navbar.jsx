import React from 'react';
import "./Styles/Navbar.css";
import Logo from "../../assets/Images/logo.png"
import {Link} from "react-router-dom";

export const Navbar = () => {
  return (
    <div className='navbar-container'>

        <div className="nav-logo">
            <img src={Logo} style={{width: "2rem", height: "2rem"}} alt="" /><h3 className='nav-heading'>Alexa Developers CU</h3>
        </div>

        <div className="flex-grow"></div>

        <div className="nav-links">
            <ul>
                <Link to="#home" className='nav-items-links'><li>Home</li></Link>
                <Link to="#aboutus" className='nav-items-links'><li>About Us</li></Link>
                <Link to="#team" className='nav-items-links'><li>Team</li></Link>
                <Link to="#events" className='nav-items-links'><li>Events</li></Link>
                <Link to="#repositories" className='nav-items-links'><li>Repositories</li></Link>
            </ul>
        </div>
        
    </div>
  )
}
