import React from "react";
import "./member-card-style.css";
import linkedIn from "../../assets/linkedin-icon.png";

function MemberCard(props){
    return(
        <div className="member-card">
                <img className="member-img" src={props.img} alt="Team member image"/>
                <h1>{props.name}</h1>
                <p className="position">{props.position}</p>
                <p>{props.major}</p>
                <p>{props.fact}</p>
                <a href={props.linkedin} class="button"><img class="member-card-icon" src={linkedIn}/></a>
        </div>
    );
}

export default MemberCard;