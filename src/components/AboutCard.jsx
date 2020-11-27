import React from "react";
import "../styles.css";

function AboutCard(props){
    return (
            <div className="about-info">
                <img className="about-img" src={props.img}/>
                <h3>{props.title}</h3>
                <p>{props.text}</p>
            </div>
    );
}

export default AboutCard;