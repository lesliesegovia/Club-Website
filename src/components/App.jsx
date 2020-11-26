import React from "react";
import "../styles.css";
import Navbar from "./Navbar";
import AboutCard from "./AboutCard";
import MemberCard from "./MemberCards/MemberCard";
import ProjectCard from "./ProjectCards/ProjectCards";
import logo from "../assets/new_light.png"
import placeholder from "../assets/placeholder.png";
import president from "../assets/president.jpg";
import JoinForm from "./JoinForm/JoinForm";



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
                <MemberCard
                    img = {president}
                    name = "Leslie Segovia"
                    position = "President/Founder"
                    major = "CS Major"
                    fact = "Loves lattes"
                    linkedin = "https://www.linkedin.com/in/lesliesegovia"
                />
                <MemberCard
                    img = {president}
                    name = "Jenelle Maximo"
                    position = "Vice President"
                    major = "CS Major"
                    fact = "Loves frappachinos"
                    linkedin = "https://www.linkedin.com/in/lesliesegovia"
                />
                <MemberCard
                    img = {president}
                    name = "Jesica Lopez"
                    position = "Treasurer"
                    major = "CS Major"
                    fact = "Loves iced coffee"
                    linkedin = "https://www.linkedin.com/in/lesliesegovia"
                />

                <MemberCard
                    img = {president}
                    name = "Winston Pham"
                    position = "Committee Chair"
                    major = "CS Major"
                    fact = "Loves frappachinos"
                    linkedin = "https://www.linkedin.com/in/lesliesegovia"
                />

                <MemberCard
                    img = {president}
                    name = "Ricardo Medina"
                    position = "Committee Chair"
                    major = "CS Major"
                    fact = "Loves tea"
                    linkedin = "https://www.linkedin.com/in/lesliesegovia"
                />

                <MemberCard
                    img = {president}
                    name = "Richard Cross"
                    position = "Advisor"
                    major = "CS Major"
                    fact = "Loves black coffee"
                    linkedin = "https://www.linkedin.com/in/lesliesegovia"
                />
            </div>
            </section>
              
            {/* --------------------- PROJECTS SECTION -------------------*/}
            <section id="projects">
            {/* TITLE */}
            <h1 id="projects" className="main-titles">Projects</h1>            
            
            {/* CONTENT */}
            <div className="projects">

                <div className="project-sections">
                 <div>
      
                 </div>   
                    <ProjectCard
                        img = {president}
                        name = "Leslie Segovia"
                        position = "President/Founder"
                        description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
                    />
                    
                    <ProjectCard
                        img = {president}
                        name = "Jennelle Maximo"
                        position = "Vice President"
                        description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
                    />

                    <ProjectCard
                        img = {president}
                        name = "Jesica L. De Leon"
                        position = "President"
                        description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" 
                    />

                </div>
            </div>
            </section>
            {/* --------------------- JOIN SECTION -------------------*/}
             {/* TITLE */}
             <h1 id="join" className="main-titles">Join</h1>            
            
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