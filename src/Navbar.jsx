import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {

    return (
        <>
            <div className="navbar" >
                <span>
                    <Link className="navbar-home" to="/">Manifest</Link>
                </span>
                <span>
                    <span className="navbar-button">
                        <Link className="navbar-link" to="/kinships">Kinships</Link>
                    </span>
                </span>
            </div>
        </>
    )
};

export default Navbar;