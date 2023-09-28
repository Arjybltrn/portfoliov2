import React from 'react'
import Nav from './Nav'
import Footer from './Footer'

const projects = [
        {
            projectTitle: "//HLLO_WRLD",
            desc: "Discover basic information about any country by searching for it. Explore details such as population, languages spoken, currency, and more.",
            tech_stack: [ "JavaScript", "HTML", "CSS", "AJAX" ],
            ss_img: "/images/helloworld.png"
        },
        {
            projectTitle: "docket.",
            desc: "Stay organized with a simple and intuitive to-do list application. Keep track of your tasks, set reminders, and easily manage your daily agenda.",
            tech_stack: [ "JavaScript", "HTML", "CSS", "Express.js" ],
            ss_img: "/images/docket.png"
        },
        {
            projectTitle: "Choruso",
            desc: "Immense yourself in the world of musiic with Choruso, a collaborative music application. Discover, listen to, and share your favourite songs and playlists with friends.",
            tech_stack: [ "Python", "Django", "PostgreSQL" ],
            ss_img: "/images/choruso.png"
        },
        {
            projectTitle: "Trackly",
            desc: "Simplify your job application process with Trackly, a comprehensive job application tracker. Keep tabs on your applications, track progress, and stay organized in your job search",
            tech_stack: [ "MongoDB", "Express.js", "React", "Node.js" ],
            ss_img: "/images/trackly.png"
        },
        {
            projectTitle: "flowerbox",
            desc: "Your online destination for exquisite floral arrangements and fresh blooms. Discover beauty, elegance, and joy in every petal.",
            tech_stack: [ "React", "Node.js", "CSS" ],
            ss_img: "/images/flowerbox.png"
        },
    ]


      export function Projects() {
        return (
          <div className='App'>


             <div className='navbar'>
              <Nav />
            </div>

            
            {projects.map((project, index) => (
            <div key={index}
                className='project-card'>
                <h3>{project.projectTitle}</h3>
                <h4>{project.desc}</h4>
                <img 
                    src={project.ss_img} 
                    className='screenShot'
                    alt={`${project.projectTitle} Screenshot`} />

            
                

            <div className='techStack'>
            <ul>
                {project.tech_stack.map((skill, skillIndex) => (
                <li key={skillIndex}>{skill}</li>
                ))}
            </ul>
            </div>
            
            </div>
            ))}

            <div className='footer'>
                <Footer />
            </div>
            
          </div>
        );
      }

       
        