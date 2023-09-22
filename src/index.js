import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App, Experiences, About, Projects } from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
  <Routes>
    <Route path="/" element={ <App /> }/>
    <Route path="/about" element={<About />} />
    <Route path="/projects" element={<Projects />}/>
    <Route path="/experiences" element={<Experiences />} />
  </Routes>
 </BrowserRouter>
);


