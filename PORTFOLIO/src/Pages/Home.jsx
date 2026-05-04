import React from 'react'
import './Home.css'
import {Link} from "react-router-dom"
import { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";


const Home = () => {
   const [hover, setHover] = useState(false);
  return (
    <div className='Front'>
      <div className='Flex-Direction'>
      <div className='Bio'>
      <h1>Hi , I'm <span>Syed Shoaib Hussain Shah</span></h1>
      <h2>Fronted Developer</h2>
      <p>I am a passionate Frontend Developer with a strong interest in building modern, responsive, and user-friendly web applications. I specialize in HTML, CSS, JavaScript, and React, and I enjoy turning ideas into interactive digital experiences.
        I am continuously learning new technologies and improving my skills to create clean, efficient, and scalable code. My goal is to become a skilled full-stack developer and contribute to impactful real-world projects.</p>
      <Link to="/works">
      <button style={{width:"170px", padding:"12px", fontSize:"15px", marginLeft:"25px", backgroundColor:"blue", color:"white", borderRadius:"8px", border:"none",
         boxShadow: hover
          ? "0px 4px 15px rgba(0,0,0,0.3)"
          : "0px 2px 5px rgba(0,0,0,0.1)",
      }} 
        onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      >
        View My Work</button>
      </Link>
      <Link to="/contact">
      <button style={{width:"170px", padding:"12px", fontSize:"15px", marginLeft:"25px", backgroundColor:"white", color:"black", borderRadius:"8px", border:"2px solid blue"
        , boxShadow: hover
          ? "0px 4px 15px rgba(0,0,0,0.3)"
          : "0px 2px 5px rgba(0,0,0,0.1)",
      }}
        onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
        Get in Touch </button>
      </Link>
      </div>
      <div className ='Details'>
      <img src="./Images/img3.png" alt="image" width="250px" />
      <div style={{display:"flex"}}>
      <div className='small'>
          <FontAwesomeIcon className='icon' icon={faCode} size="2x" />
          <div className='small1'>
        <h2>Fronted Developer</h2>
        <p style={{marginLeft:"15px"}}>Building web Solutions</p>
        </div>
      </div>
      <div className='small'>
           <FontAwesomeIcon className='icon' icon={faGraduationCap} size="2x" />
          <div className='small1'>
        <h2>DSA problem Solving</h2>
        <p>Building web Solutions</p>
        </div>
      </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Home
