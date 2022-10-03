
import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar(){

    return(
        <div className="nav_container">
            <div className="nav">
                <Link to="/" className="menu">Actor</Link>
                <Link to="/Show" className="menu">Shows</Link>
            </div>
        </div>
    )
}
export default NavBar;