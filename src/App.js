import './App.css';
import { Link, Outlet } from "react-router-dom"

import React from 'react';

function Home(props) {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/experiences">Professional Experiences</Link>
            </nav>
            <h1>My Website</h1>
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

