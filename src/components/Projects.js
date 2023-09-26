import React from 'react'
import Nav from './Nav'
import Footer from './Footer'

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
            desc: "Your online destination for exquisite floral arrangements and fresh blooms. Discover beauty, elegance, and joy in every petal.",
            tech_stack: [ "React", "Node.js", "CSS" ],
            ss_img: ""
        },
    ]



    function ProjectsList  ({ data, renderItem, renderEmpty }) {
        return !data.length ? ( renderEmpty
            ) : ( 
                <div>{data.map((item) => (
                    <p key={item.projectTitle}>
                        {renderItem(item)}
                    </p>
                ))}    
                </div>
            )
    }


    export function Projects() {

        
        
       
        return (
          <div>
             <Nav />
            <h1>Projects</h1>
            <ProjectsList 
                data={projects}
                renderEmpty={<p>this list is empty</p>}
                renderItem={item => 
                <div className='projects'>
                    <h1>{item.projectTitle} </h1> 
                    <p>{item.desc}</p>
                    <h2>Skills:</h2> 
                    {item.tech_stack}
                    <div className='cardImage'>
                    {item.ss_img}
                    </div>
                </div>} />
                <Footer />
        </div>
        )
      }




      // let ts = [ "JavaScript", "HTML", "CSS", "AJAX" ]
       
        