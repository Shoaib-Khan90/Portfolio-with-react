import React from 'react'
import './About.css'
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const About = () => {
  return (
    <div className='About'>
      <div className='text'>
      <img style={{borderRadius:"50%", marginTop:"50px"}} src="./Images/img1.png" width="250px"  alt="" />
      <h1>Abo<span style={{color:"blue", textDecoration:"underline"}}>ut</span> Me </h1>
      <h3>A passionate developer and learner on a continues journey of growth and innovation.</h3>
      </div>
      <div className='journey'>
      <h1>Welcome to My Journey</h1>
      <p>i am <span style={{color:"blue"}}>Syed Shoaib Hussain Shah</span> and I am currently pursuing a BSCS degree from Federal University and I am in my 6th semester. My journey in computer science started with a curiosity to understand how websites and applications work, which gradually turned into a strong passion for frontend development.</p>
      <p>During my academic journey, I have studied core subjects including Programming Fundamentals, Object-Oriented Programming, Data Structures, Database Systems, Operating Systems, and Software Engineering. Alongside my university studies, I have independently learned modern frontend technologies such as HTML, CSS, JavaScript, and React.</p>
      <p>I enjoy building responsive and user-friendly web applications and continuously work on improving my skills by creating projects and exploring new tools and frameworks. My goal is to grow as a professional developer and contribute to impactful real-world applications.</p>
      </div>
      <div className='text1'>
      <h1>My Development <span style={{color:"blue"}}> Tool </span></h1>
      </div>
      <div className='Tools'>
      <div className='Academic'>
      <FontAwesomeIcon className='icon' icon={faGraduationCap} size="2x" />
      <h2>Academic Foundation</h2>
      <p>2nd year Pre-Engineering From Govt College Formen Nazimabad .</p>
      </div>

        <div className='Academic'>
      <FontAwesomeIcon className='icon' icon={faCode} size="2x" />
      <h2>Development Mastery</h2>
      <p>Progressed from HTML/CSS basics through JavaScript to React Fronted Development .</p>
      </div>

       <div className='Academic'>
      <FontAwesomeIcon style={{fontSize:"35px"}} className='icon' icon={faArrowRightLong} />
      <h2>Real World Projects</h2>
      <p>I build real-world projects using HTML, CSS, JavaScript, and React, focusing on responsive design, performance, and user-friendly interfaces.</p>
      </div>

        <div className='Academic'>
     <FontAwesomeIcon className='icon' icon={faGithub} size="2x" />
      <h2>Github</h2>
      <p>I build responsive and user-friendly web applications using HTML, CSS, JavaScript, and React.</p>
      </div>
      </div>

      <div className='text2'>
      <h1>Technical <span style={{color:"blue"}}> Skills </span></h1>
      </div>

      <div className='Skill'>
        <div className='Fronted'>
          <h1>Fronted</h1>
          <button>React</button>
          <button style={{marginLeft:"10px"}}>JavaScript</button>
          <button style={{marginLeft:"10px"}}>HTML/CSS</button>
          <button style={{marginLeft:"10px"}}>Tailwind</button>
          <button style={{ marginTop:"10px"}}>TypeScript</button>
          <button style={{marginLeft:"10px"}}>BootStrap</button>
        </div>

         <div className='Fronted'>
          <h1>Tools & Platforms</h1>
          <button>Git</button>
          <button style={{marginLeft:"10px"}}>Vercel</button>
          <button style={{marginLeft:"10px"}}>Render</button>
          <button style={{marginLeft:"10px"}}>Firebase</button>
          <button style={{marginLeft:"10px", marginTop:"10px"}}>Netlify</button>
          <button style={{marginTop:"10px"}}>Github</button>
          <button style={{ marginLeft:"10px",marginTop:"10px"}}>Coursel</button>
        </div>
      </div>


    </div>
  )
}

export default About
