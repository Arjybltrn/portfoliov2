import React from 'react'
import Nav from './Nav'
import Footer from './Footer'


const about = "I'm a software engineer who's all about that hands-on, DIY ethos – just like my background in home renovation. I've got the chops in various programming languages and frameworks, and I really thrive when I'm part of a team. My knack for catching the little things and my experience keeping projects on track help me come up with solutions that are both sleek and efficient. I'm always up for learning something new, and I make sure to stay in the loop with the latest tech trends. Let's connect and see how we can team up to make some serious waves in the software engineering world!"


export function About() {
    return (
    <div className='App'>
        <Nav />
        <p>{about}</p>
        <Footer />
    </div>

    

    )
  }