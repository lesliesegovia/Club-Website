import React from "react";
import "./member-card-style.css"
import linkedIn from "../../assets/linkedin-icon.png";

function MemberCard(props){
    return (
            <div class="flip-card">
            {/* <h3 className="section">{props.section}</h3> */}
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img src={props.img} className="member-img"/>
                            <span className="display-name">
                                <h3 className="front-card-text">{props.name}</h3>
                                <p className="front-card-text">{props.position}</p>
                            </span>
                        </div>
                        <div class="flip-card-back">
                            <h1>About me</h1>
                            <p className="back-card-text">{props.major}</p>
                            <p className="back-card-text">{props.fact}</p>
                            <p className="back-card-text">{props.bio}</p>
                            <a href={props.linkedin} class="button"><img class="project-card-icon" src={linkedIn}/></a>
                        </div>
                    </div>
                </div>
    );
}

export default MemberCard;