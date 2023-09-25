import './App.css';
import { Link } from "react-router-dom"
import About  from "./components/About"
import Experience from './components/Experience';   
import Projects from './components/Projects';

import React from 'react';



export function App() {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/experiences">Professional Experiences</Link>
            </nav>
            <h1>Arjay Beltran</h1>
            <p>This is my home</p>
        </div>
    );
}











