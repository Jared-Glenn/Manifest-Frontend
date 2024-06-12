import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    
    const [ imageSrc, setImageSrc ] = useState(null);

    useEffect(() => {
        async function loadImage() {
            try {
                const imageModule = await import("./assets/manifest_logo.png");
                setImageSrc(imageModule.default);
            }
            catch (error) {
                console.error("Error loading image:", error);
            }
        }
        loadImage();
    }, []);

    return (
        <>
            <div className="navbar" >
                <span>
                    <Link className="navbar-home" to="/"><img className="navbar-logo" src={imageSrc} alt="Manifest" /></Link>
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