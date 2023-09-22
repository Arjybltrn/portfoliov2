import './App.css';
import { Link, Outlet } from "react-router-dom"

import React from 'react';

const about = "Skilled full-stack developer with expertise in HTML, CSS, JavaScript, React, Python, Django, Express, PostgreSQL, MongoDB, Node.js, and Git. Holds Graduate Certificates in Software Engineering and Home Construction Renovation, and an Advanced Diploma in Computer Science. "


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


const exp = [ 
    {
        companyName: "General Assembly",
        jobTitle: "Software Engineer Fellow",
        location: "Remote",
        jobDesc: [ 
                    "Created full-stack applications with comprehensive functionality, including Create, Read, Update, and Delete (CRUD) operations and RESTful API capabilities.",
                    "Utilized JavaScript and React for front-end web development, incorporating third-party APIs seamlessly.", 
                    "Employed Python and Django for back-end development, utilizing PostgreSQL, MongoDB, and Express for efficient data management.",
                    "Successfully completed over 450 hours in the intensive Software Engineering Immersive program."
    ],
        date: "March 2023 - May 2023"

    },
    {
        companyName: "Madison Group",
        jobTitle: "Customer Care Technician",
        location: "Toronto, ON",
        jobDesc: [ 
                    "Consistently upheld a professional demeanor while successfully fulfilling work orders and service calls as the company's representative.",
                    "Excelled in inspections, diagnoses, repairs, and documentation, emphasizing strong problem-solving and attention to detail.", 
    ],
        date: "March 2022 - March 2023"

    },
    {
        companyName: "R-MAC Solutions, Inc.",
        jobTitle: "Junior Carpenter",
        location: "Toronto, ON",
        jobDesc: [ 
                    "Applied a wide range of effective problem-solving approaches and tools to consistently achieve project deadlines and deliver high-quality results.",
                    "Exhibited strong organization in project planning, adhering to codes and safety, enhancing client satisfaction.", 
    ],
        date: "October 2021 - February 2022"

    },
    {
        companyName: "G Hirsch Renovations",
        jobTitle: "Apprentice Carpenter",
        location: "Toronto",
        jobDesc: [ 
                    "Proficiently organized job sites, efficiently gathering tools and materials, while upholding high standards of cleanliness and safety.",
                    "Aided carpenters in structure installation, displayed problem-solving skills, and maintained workspace.", 
    ],
        date: "June 2021 - November 2021"

    },
    {
        companyName: "UNIQLO Canada",
        jobTitle: "Assistant Store Manager",
        location: "Toronto",
        jobDesc: [ 
                    "Successfully achieved daily store sales target of 100% through strategic planning and effective sales management.",
                    "Oversaw store operations, prioritizing safety and excellent customer service.", 
    ],
        date: "August 2017 - July 2020"

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

export function Projects({ data, renderItem, renderEmpty}) {
    return !data.length ? renderEmpty : 
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/experiences">Professional Experiences</Link>
            </nav>
            <h1>Projects</h1>
        </div>
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

