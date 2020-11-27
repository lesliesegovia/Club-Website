import React from "react";
import "./project-card-style.css";
import linkedIn from "../../assets/linkedin-icon.png";

function ProjectCards(props){
    return(
        <div className="project-card">
                {/* <img className="project-img" src={props.img} /> */}
                <img className="project-icon" src={props.img} />
                <h1>{props.name}</h1>
                <p className="section">{props.section}</p>
                <p id="project-description">{props.description}</p>
                {/* <p>{props.major}</p>
                <p>{props.fact}</p>
                <a href={props.linkedin} class="button"><img class="project-card-icon" src={linkedIn}/></a> */}
        </div>
    );
}

export default ProjectCards;