import React from 'react'
import { Link, Outlet } from "react-router-dom"


const about = "Skilled full-stack developer with expertise in HTML, CSS, JavaScript, React, Python, Django, Express, PostgreSQL, MongoDB, Node.js, and Git. Holds Graduate Certificates in Software Engineering and Home Construction Renovation, and an Advanced Diploma in Computer Science. "

export function Nav(props) {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/experiences">Professional Experiences</Link>
            </nav>
        </div>
    );
}

export function About() {
    return (
      <div>About</div>
    )
  }