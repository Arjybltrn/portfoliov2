import './App.css';
import { Link } from "react-router-dom"
import Footer from './components/Footer'

import React from 'react';




export function App() {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/experience">Professional Experience</Link>
            </nav>
            <div className="name">
                <h1>Arjay Beltran</h1>
            </div>
            <div className='title'>
                <h2>Software Engineer</h2>
            </div>
            <Footer />
        </div>
    );
}











