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
                {/* <AboutCard
                    img = {placeholder}
                    title = "About Code Brew"
                    text = "As a club, we focus on establishing a collaborative community of CS through group projects where everyone is welcomed and encouraged to share their skills !"
                />
                <AboutCard
                    img = {placeholder}
                    title = "Our Mission"
                    text = "We aim to gather students from different majors to learn new skills from one another through group projects that revolves around computer science.We encourage fun and creative coding outside of the classroom environment."
                /> */}
            </div>
            </section>

            {/* --------------------- MEET THE TEAM SECTION -------------------*/}
            <section id="meet-team-section">
            {/* SUBTITLE */}
                <h1 className="main-titles">Meet the Team</h1>
            {/* CONTENT */}
            <div className="board">

                     <MemberCards
                        img = {placeholder}
                        name = "Leslie Segovia"
                        position = "placeholder/Founder"
                        description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
                    />
                    
                    <MemberCards
                        img = {placeholder}
                        name = "Jennelle Maximo"
                        position = "Vice placeholder"
                        description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
                    />

                    <MemberCards
                        img = {placeholder}
                        name = "Jesica L. De Leon"
                        position = "Treasure"
                        description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" 
                    />

                    <MemberCards
                        img = {placeholder}
                        name = "Winston Pham"
                        position = "Committee Chair"
                        description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" 
                    />

                    <MemberCards
                        img = {placeholder}
                        name = "Ricardo Medina"
                        position = "Committee Chair"
                        description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" 
                    />

                    <MemberCards
                        img = {placeholder}
                        name = "Richard Cross"
                        position = "Advisor"
                        description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" 
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
                    position = "Details"
                    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
                    // major = "CS Major"
                    // fact = "Loves lattes"
                    // linkedin = "https://www.linkedin.com/in/lesliesegovia"
                />
                <ProjectCard
                    img = {mobileIcon}
                    name = "Mobile Dev"
                    position = "Details"
                    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
                    // major = "CS Major"
                    // fact = "Loves frappachinos"
                    // linkedin = "https://www.linkedin.com/in/lesliesegovia"
                />
                <ProjectCard
                    img = {gameIcon}
                    name = "Game Dev"
                    position = "Details"
                    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
                    // major = "CS Major"
                    // fact = "Loves iced coffee"
                    // linkedin = "https://www.linkedin.com/in/lesliesegovia"
                />
              
            </div>
            </section>

            
            {/* --------------------- JOIN SECTION -------------------*/}
             {/* TITLE */}
             <h1 id="join" className="main-titles">Join the club!</h1>            
            
            {/* CONTENT */}
            <div className="join">
                <JoinForm/>
            </div>

             {/* --------------------- CONTACT SECTION -------------------*/}

             <div className="contact">
                    
             </div>
            
        </>
    );
}

export default App;