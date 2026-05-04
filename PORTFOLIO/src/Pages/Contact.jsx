import React from 'react'
import './Contact.css'
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <div className='Contact'>
      <div className='Main-container'>
      <div className='data'>
      <img src="./Images/img2.png" width="250px" alt="" />
      <h1>Connect With <span>Syed Shoaib</span></h1>
      <h2>Age : <span> 22 </span> Years </h2>
      </div>

      <div className='email'>
     <FontAwesomeIcon className='icon' icon={faEnvelope} />
     <div className='data1'>
      <p>Email :</p>
      <p style={{color:"black", marginTop:"-10px"}}>shoaib7878687@gmail.com</p>
     </div>
      </div>

        <div style={{marginTop:"20px"}} className='email'>
     <FontAwesomeIcon className='icon' icon={faEnvelope} />
     <div className='data1'>
      <p>Alternate Email :</p>
      <p style={{color:"black", marginTop:"-10px"}}>coderboy647@gmail.com</p>
     </div>
      </div>

        <div style={{marginTop:"20px"}}  className='email'>
     <FontAwesomeIcon className='icon' icon={faPhone} size="lg" color="green" />
     <div className='data1'>
      <p>phone :</p>
      <p style={{color:"black", marginTop:"-10px"}}>+92 3122403099</p>
     </div>
      </div>

        <div style={{marginTop:"20px"}}  className='email'>
     <FontAwesomeIcon className='icon' icon={faGraduationCap} />
     <div className='data1'>
      <p>Education :</p>
      <p style={{color:"black", marginTop:"-10px"}}>BS in Computer Science</p>
     </div>
      </div>

      <div className='Find'>
      <h1>Find Me On</h1>
      </div>

      <div className='button'> 
      <button> <a href="https://github.com/Shoaib-Khan90" target='_blank'><FontAwesomeIcon className='icon1' icon={faGithub} /> Github</a></button>
      <button>  <a href="https://www.linkedin.com/in/shoaib-khan-6bba402ab/" target='_blank'><FontAwesomeIcon className='icon1' icon={faLinkedin} />Linkdin</a></button>
      <button><a href="https://web.whatsapp.com/" target='_blank'>    <FontAwesomeIcon className='icon1' icon={faWhatsapp} />Whatsapp </a></button>
      <button><a href="https://www.facebook.com/" target='_blank'> <FontAwesomeIcon icon={faFacebook} />Facebook</a></button>
      </div>
      </div>
    </div>
  )
}

export default Contact
