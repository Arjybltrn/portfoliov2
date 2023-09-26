import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div>
        <nav className='navbar'>
            <Link to="/">Home</Link>
            <Link to="/about">About Me</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/experience">Professional Experience</Link>
        </nav>
    </div>
  )
}
