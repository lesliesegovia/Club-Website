import React from "react";
import "../styles.css";
import Navbar from "./Navbar";
import AboutCard from "./AboutCard";
import ProjectCard from "./ProjectCards/ProjectCard";
import MemberCards from "./MemberCard/MemberCard";
import logo from "../assets/new_light.png"
import placeholder from "../assets/placeholder.png";
import JoinForm from "./JoinForm/JoinForm";
import webIcon from "../assets/web-icon.png";
import mobileIcon from "../assets/mobile-icon.png";
import gameIcon from "../assets/game-icon.png";
import president from "../assets/president.jpg"
import advisor from "../assets/advisor.jpeg";
import journey from "../assets/journey.png";
import mission from "../assets/mission.png";
import vibe from "../assets/vibe.png";
import community from "../assets/community.png";
import gmail from "../assets/gmail-icon.png";
import insta from "../assets/insta-icon.png";
import discord from "../assets/discord-icon.png";



function App(){
    return (
        <>
            {/* --------------------- HEADING SECTION -------------------*/}
            <div className="heading">
                <Navbar/>
                <img id="main-logo" src={logo}/>
                {/* <p style={{textAlign:"center", color: "#ffffff", fontFamily: "cursive", fontSize:"50px"}}>- Menu -</p> */}
            </div>
            
            {/* --------------------- ABOUT SECTION -------------------*/}
            <section id="about">
            {/* TITLE */}
            <h1 className="main-titles">About</h1>
           
            {/* CONTENT */}
            <div className="about-content">
                <AboutCard
                    img = {journey}
                    title = "Our Journey"
                    text = "As a club, we focus on establishing a collaborative community of CS through group projects where everyone is welcomed and encouraged to share their skills !"
                />
                <AboutCard
                    img = {mission}
                    title = "Our Mission"
                    text = "We aim to gather students from different majors to learn new skills from one another through group projects that revolves around computer science."
                />
                </div>
                <div className="about-content">
                <AboutCard
                    img = {vibe}
                    title = "Our Vibe"
                    text = "As a club, we focus on establishing a collaborative community of CS through group projects where everyone is welcomed and encouraged to share their skills !"
                />
                <AboutCard
                    img = {community}
                    title = "Your Community"
                    text = "As a club, we focus on establishing a collaborative community of CS through group projects where everyone is welcomed and encouraged to share their skills !"
                />
                </div>
            </section>

            {/* --------------------- MEET THE TEAM SECTION -------------------*/}
            <section id="meet-team-section">
            {/* SUBTITLE */}
                <h1 className="main-titles">Meet the Team</h1>
            {/* CONTENT */}
            <div className="board">

                     <MemberCards
                        img = {president}
                        name = "Leslie Segovia"
                        position = "President/Founder"

                        major = "CS Major"
                        fact = "loves lattes"
                        bio = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
                    />
                    
                    <MemberCards
                        img = {placeholder}
                        name = "Jennelle Maximo"
                        position = "Vice President"

                        major = "CS Major"
                        fact = "loves lattes"
                        bio = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
                    />

                    <MemberCards
                        img = {placeholder}
                        name = "Jesica L. De Leon"
                        position = "Treasure"

                        major = "CS Major"
                        fact = "loves lattes"
                        bio = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" 
                    />

                    <MemberCards
                        img = {placeholder}
                        name = "Winston Pham"
                        position = "Committee Chair"

                        major = "CS Major"
                        fact = "loves lattes"
                        bio = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" 
                    />

                    <MemberCards
                        img = {placeholder}
                        name = "Ricardo Medina"
                        position = "Committee Chair"

                        major = "CS Major"
                        fact = "loves lattes"
                        bio = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" 
                    />

                    <MemberCards
                        img = {advisor}
                        name = "Richard Cross"
                        position = "Advisor"

                        major = "CS Professor"
                        fact = "loves lattes"
                        bio = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" 
                    />
                
                
            </div>
            </section>
              
            {/* --------------------- PROJECTS SECTION -------------------*/}
            <section id="projects">
            {/* TITLE */}
            <h1 className="main-titles">Projects</h1>            
            
            {/* CONTENT */}
            <div className="projects">

                    <ProjectCard
                    img = {webIcon}
                    name = "Web Dev"
                    section = "Details"
                    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
                    // major = "CS Major"
                    // fact = "Loves lattes"
                    // linkedin = "https://www.linkedin.com/in/lesliesegovia"
                />
                <ProjectCard
                    img = {mobileIcon}
                    name = "Mobile Dev"
                    section = "Details"
                    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
                    // major = "CS Major"
                    // fact = "Loves frappachinos"
                    // linkedin = "https://www.linkedin.com/in/lesliesegovia"
                />
                <ProjectCard
                    img = {gameIcon}
                    name = "Game Dev"
                    section = "Details"
                    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
                    // major = "CS Major"
                    // fact = "Loves iced coffee"
                    // linkedin = "https://www.linkedin.com/in/lesliesegovia"
                />
              
            </div>
            </section>

            
            {/* --------------------- JOIN SECTION -------------------*/}
            <section id="join">
             {/* TITLE */}
             <h1 className="main-titles">Join the club!</h1>            
            
            {/* CONTENT */}
            <div className="join-section">
                <JoinForm/>
            </div>
            </section>

             {/* --------------------- FOOTER SECTION -------------------*/}

             <footer id="contact">
                    <h1>Contact us</h1>
                    <p>Created by Leslie Segovia</p>
                    {/* <img className="contact-icon" src={gmail}/>
                    <img className="contact-icon" src={insta}/>
                    <img className="contact-icon" src={discord}/> */}
             </footer>
            
        </>
    );
}

export default App;