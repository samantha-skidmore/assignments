//NAVBAR COMPONENT

import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar(props) {
    return (
        <div className="Links">
            <nav>
                <Link to="/">Home</Link>
                <Link to="../Pages/AboutUs">About Us</Link>
                <Link to="../Pages/Resources">Resources</Link>
                <Link to="../Pages/ContactUs">Contact Us</Link>
                <Link to="../Pages/MyAccount">My Account</Link>
            </nav>
        )
    }
export default Navbar;
