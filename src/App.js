import './App.css';
import { Link } from "react-router-dom"
import Footer from './components/Footer'
import Nav from './components/Nav'
import './css/Nav.css'

import React from 'react';




export function App() {
    return (
        <div className='App'>
           
           <div className='navbar'>
                <Nav />
            </div>
            
            <div className="name">
                <h1>Hello. I'm Arjay </h1>
                <h2>Software Engineer</h2>
            </div>
        
            
            <div className='footer'>
                <Footer />
            </div>
            
            
        </div>
    );
}











