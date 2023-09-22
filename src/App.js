import './App.css';
import { Link, Outlet } from "react-router-dom"

import React from 'react';

const about = ""
const projects = [
    {
        projectTitle: "//HLLO_WRLD",
        desc: "Discover basic information about any country by searching for it. Explore details such as population, languages spoken, currency, and more.",
        tech_stack: [ "JavaScript", "HTML", "CSS", "AJAX" ],
        ss_img: ""
    },
    {
        projectTitle: "docket.",
        desc: "Stay organized with a simple and intuitive to-do list application. Keep track of your tasks, set reminders, and easily manage your daily agenda.",
        tech_stack: [ "JavaScript", "HTML", "CSS", "Express.js" ],
        ss_img: ""
    },
    {
        projectTitle: "Choruso",
        desc: "Immense yourself in the world of musiic with Choruso, a collaborative music application. Discover, listen to, and share your favourite songs and playlists with friends.",
        tech_stack: [ "Python", "Django", "PostgreSQL" ],
        ss_img: ""
    },
    {
        projectTitle: "Trackly",
        desc: "Simplify your job application process with Trackly, a comprehensive job application tracker. Keep tabs on your applications, track progress, and stay organized in your job search",
        tech_stack: [ "MongoDB", "Express.js", "React", "Node.js" ],
        ss_img: ""
    },
    {
        projectTitle: "flowerbox",
        desc: "Your online destinatiiioin for exquisite floral arrangements and fresh blooms. Discover beauty, elegance, and joy in every petal.",
        tech_stack: [ "React", "Node.js", "CSS" ],
        ss_img: ""
    },
]

function Home(props) {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/experiences">Professional Experiences</Link>
            </nav>
            <h1>Arjay Beltran</h1>
        </div>
    );
}

export function About(props) {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/experiences">Professional Experiences</Link>
            </nav>
            <h1>About</h1>
        </div>
    );
}

export function Projects(props) {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/experiences">Professional Experiences</Link>
            </nav>
            <h1>Projects</h1>
        </div>
    );
}

export function Experiences(props) {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/experiences">Professional Experience</Link>
            </nav>
            <h1>Professional Experience</h1>
        </div>
    );
}




export function App() {
 return < Home />
}

