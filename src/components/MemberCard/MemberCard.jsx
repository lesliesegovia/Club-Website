import React from "react";
import "./member-card-style.css"

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
                            <h1>Description</h1>
                            <p className="back-card-text">{props.description}</p>
                        </div>
                    </div>
                </div>
    );
}

export default MemberCard;