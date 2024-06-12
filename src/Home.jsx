import React from "react";
import "./Home.css"
import manifestLogo from "./assets/manifest_logo.png";
import kickstarterBanner from "./assets/kickstarter_banner.png";

function Home() {

    

    return (
        <div className="home-div">
            <img className="home-logo" src={manifestLogo} alt="Manifest Logo" />
            <h1 className="home-welcome">Welcome to Manifest</h1>
            <br />
            <p className="home-text">Howdy, Partner!</p>
            <p className="home-text">
                Get ready to Tell Tales as Tall as the Western Sky with this Tabletop Roleplaying 
                Game Setting! Manifest is the realization of 20 years of planning and playtesting 
                and expands on a detailed world made up of American legends, myths, and campfire 
                stories, all on the backdrop of Western adventure and magic.
            </p>
            <p className="home-text">
                Click below to follow us on Kickstarter!
            </p>
            <br />
            <a href="https://www.kickstarter.com/projects/2106286433/manifest-kith-and-kin-a-guide-to-mythic-western-kinships?ref=f2ocgs" 
            className="link-wrapper">
                <img className="kickstarter-banner" src={kickstarterBanner} alt="Kith and Kin Kickstarter" />
            </a>

        </div>
    )
}

export default Home;