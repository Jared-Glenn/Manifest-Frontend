import React, { useState, useEffect } from "react";
import "./Kinship.css";

function Kinship({kinshipObject}) {

    const { kinship_name, url } = kinshipObject;
    const [ imageSrc, setImageSrc ] = useState(null);

    useEffect(() => {
        async function loadImage() {
            try {
                let imageModule;
                try {
                    imageModule = await import(`./assets/${url}.png`);
                } 
                catch {
                    imageModule = await import(`./assets/${url}.jpg`);
                }
                setImageSrc(imageModule.default);
            }
            catch (error) {
                console.error("Error loading image:", error);
            }
        }
        loadImage();
    }, [url]);

    if(!imageSrc) {
        return <div>Loading...</div>;
    }

    return (
        <a href={`/kinships/${kinship_name}`} className="link-wrapper">
            <div className="kinship-card">
                <div className="image-container">
                    <img className="kinship-img" src={imageSrc} alt={kinship_name} />
                </div>
                <div className="name-container">
                    <h3 className="kinship-name">{kinship_name.toUpperCase()}</h3>
                </div>
            </div>
        </a>
    )
};

export default Kinship;