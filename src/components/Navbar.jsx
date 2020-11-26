import React from "react";
import "../styles.css";

function Navbar(){
    return(
        <div className="navbar">
            <a className="active" href="#join">join</a>
            <a href="#about">about</a>
            <a href="#projects">projects</a>
            <a href="#contact">contact</a>
        </div>
    );
}

export default Navbar;