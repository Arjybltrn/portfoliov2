import React from 'react'
import { Link, Outlet } from "react-router-dom"
import Nav from './Nav'


const about = "Skilled full-stack developer with expertise in HTML, CSS, JavaScript, React, Python, Django, Express, PostgreSQL, MongoDB, Node.js, and Git. Holds Graduate Certificates in Software Engineering and Home Construction Renovation, and an Advanced Diploma in Computer Science. "



export function About() {
    return (
      <div>
         <Nav />
        <h1>professional summary</h1>
        <p>{about}</p>
    </div>
    )
  }