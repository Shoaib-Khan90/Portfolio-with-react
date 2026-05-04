import React from 'react'
import './Works.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faShareFromSquare } from "@fortawesome/free-regular-svg-icons";

const Works = () => {
  return (
    <div className='Works'>
      <div className='text4'>
      <h1>My <span>Projects</span></h1>
      </div>
      <div className='Projects'>
        <div className='project'>
          <div className='img'>
        <img src="./Images/project1.png" width="160px" height="150px" alt="" />
        </div>
        <h1>Landing Page</h1>
        <p>Developed a modern and responsive landing page using React, focusing on clean UI, smooth user experience, and optimized performance. This project highlights my ability to build real-world frontend applications with a professional design approach.</p>
        <button>HTML</button>
        <button style={{marginLeft:"10px"}}>CSS</button>
        <button style={{marginLeft:"10px"}}>JavaScript</button>
        <button style={{marginLeft:"10px"}}>React</button>
        <div className='links'>
        <button><a href="https://landing-page-form-react.vercel.app/" target='_blank'><FontAwesomeIcon style={{fontSize:"20px"}} icon={faShareFromSquare} /> Live</a></button>
        <button className='btn2' style={{marginLeft:"10px"}}><a  href="https://github.com/Shoaib-Khan90/Landing-Page-Form-React" target='_blank'><FontAwesomeIcon style={{fontSize:"20px"}} icon={faGithub} size="2x" /> Github</a></button>
        </div>
        </div>

        <div className='project'>
          <div className='img'>
        <img src="./Images/project2.png" width="160px" height="150px" alt="" />
        </div>
        <h1>Age Calculator</h1>
        <p>Developed an Age Calculator using JavaScript that calculates and displays the user’s age based on their date of birth, focusing on accuracy and a simple user-friendly interface.</p>
        <button>HTML</button>
        <button style={{marginLeft:"10px"}}>CSS</button>
        <button style={{marginLeft:"10px"}}>JavaScript</button>
        <button style={{marginLeft:"10px"}}>React</button>
        <div className='links'>
        <button><a href="https://age-calculator-two-orcin.vercel.app/" target='_blank'><FontAwesomeIcon style={{fontSize:"20px"}} icon={faShareFromSquare} /> Live</a></button>
        <button className='btn2' style={{marginLeft:"10px"}}><a  href="https://github.com/Shoaib-Khan90/Age-Calculator" target='_blank'><FontAwesomeIcon style={{fontSize:"20px"}} icon={faGithub} size="2x" /> Github</a></button>
        </div>
        </div>

        <div className='project'>
          <div className='img'>
        <img src="./Images/project3.png" width="160px" height="150px" alt="" />
        </div>
        <h1>Currency Converter</h1>
        <p>Developed a Currency Converter (Currency Counter) using JavaScript that allows users to convert values between different currencies. The project focuses on real-time calculation, user-friendly interface, and practical real-world usage.</p>
        <button>HTML</button>
        <button style={{marginLeft:"10px"}}>CSS</button>
        <button style={{marginLeft:"10px"}}>JavaScript</button>
        <button style={{marginLeft:"10px"}}>React</button>
        <div className='links'>
        <button><a href="https://currency-converter-with-react-eight.vercel.app/" target='_blank'><FontAwesomeIcon style={{fontSize:"20px"}} icon={faShareFromSquare} /> Live</a></button>
        <button className='btn2' style={{marginLeft:"10px"}}><a  href="https://github.com/Shoaib-Khan90/Currency-Converter-With-React" target='_blank'><FontAwesomeIcon style={{fontSize:"20px"}} icon={faGithub} size="2x" /> Github</a></button>
        </div>
        </div>
        
        <div className='project'>
          <div className='img'>
        <img src="./Images/project4.png" width="160px" height="150px" alt="" />
        </div>
        <h1>Count Character</h1>
        <p>Developed a Character Counter application using JavaScript that counts the number of characters in a given input. This project focuses on real-time input handling and improving user interaction with simple and efficient functionality.</p>
        <button>HTML</button>
        <button style={{marginLeft:"10px"}}>CSS</button>
        <button style={{marginLeft:"10px"}}>JavaScript</button>
        <button style={{marginLeft:"10px"}}>React</button>
        <div className='links'>
        <button><a href="https://count-character-and-sentence.vercel.app/" target='_blank'><FontAwesomeIcon style={{fontSize:"20px"}} icon={faShareFromSquare} /> Live</a></button>
        <button className='btn2' style={{marginLeft:"10px"}}><a  href="https://github.com/Shoaib-Khan90/Count-Character-and-Sentence" target='_blank'><FontAwesomeIcon style={{fontSize:"20px"}} icon={faGithub} size="2x" /> Github</a></button>
        </div>
        </div>
        
        <div className='project'>
          <div className='img'>
        <img src="./Images/project5.png" width="160px" height="150px" alt="" />
        </div>
        <h1>BMI Calculator</h1>
        <p>Developed a BMI Calculator using JavaScript that calculates Body Mass Index based on user input (height and weight), providing instant results with a simple and user-friendly interface.</p>
        <button>HTML</button>
        <button style={{marginLeft:"10px"}}>CSS</button>
        <button style={{marginLeft:"10px"}}>JavaScript</button>
        <button style={{marginLeft:"10px"}}>React</button>
        <div className='links'>
        <button><a href="https://bmi-calculator-n3vu.vercel.app/" target='_blank'><FontAwesomeIcon style={{fontSize:"20px"}} icon={faShareFromSquare} /> Live</a></button>
        <button className='btn2' style={{marginLeft:"10px"}}><a  href="https://github.com/Shoaib-Khan90/BMI-Calculator" target='_blank'><FontAwesomeIcon style={{fontSize:"20px"}} icon={faGithub} size="2x" /> Github</a></button>
        </div>
        </div>

        <div className='project'>
          <div className='img'>
        <img src="./Images/project6.png" width="160px" height="150px" alt="" />
        </div>
        <h1>Github User Search</h1>
        <p>Built a GitHub User Search app using JavaScript and API integration.
It fetches and displays user profile data in real-time.
Focused on clean UI and dynamic data handling.
</p>
        <button>HTML</button>
        <button style={{marginLeft:"10px"}}>CSS</button>
        <button style={{marginLeft:"10px"}}>JavaScript</button>
        <button style={{marginLeft:"10px"}}>React</button>
        <div className='links'>
        <button><a href="https://github-user-search-iota-lake.vercel.app/" target='_blank'><FontAwesomeIcon style={{fontSize:"20px"}} icon={faShareFromSquare} /> Live</a></button>
        <button className='btn2' style={{marginLeft:"10px"}}><a  href="https://github.com/Shoaib-Khan90/Github_User_Search" target='_blank'><FontAwesomeIcon style={{fontSize:"20px"}} icon={faGithub} size="2x" /> Github</a></button>
        </div>
        </div>

        <div className='project'>
          <div className='img'>
        <img src="./Images/project7.png" width="160px" height="150px" alt="" />
        </div>
        <h1>Lottery Game</h1>
        <p>Developed a Lottery Game using JavaScript that generates random numbers and checks user input.
It provides instant win/lose results based on matching numbers.
Focused on logic building and interactive user experience.</p>
        <button>HTML</button>
        <button style={{marginLeft:"10px"}}>CSS</button>
        <button style={{marginLeft:"10px"}}>JavaScript</button>
        <button style={{marginLeft:"10px"}}>React</button>
        <div className='links'>
        <button><a href="https://lottery-game-rose.vercel.app/" target='_blank'><FontAwesomeIcon style={{fontSize:"20px"}} icon={faShareFromSquare} /> Live</a></button>
        <button className='btn2' style={{marginLeft:"10px"}}><a  href="https://github.com/Shoaib-Khan90/Lottery_Game" target='_blank'><FontAwesomeIcon style={{fontSize:"20px"}} icon={faGithub} size="2x" /> Github</a></button>
        </div>
        </div>

        <div className='project'>
          <div className='img'>
        <img src="./Images/project8.png" width="160px" height="150px" alt="" />
        </div>
        <h1>Todo App</h1>
        <p>Developed a Todo App using JavaScript that allows users to add, delete, and manage daily tasks.
Includes real-time updates with a clean and user-friendly interface.
Focused on functionality, organization, and interactive UI.
</p>
        <button>HTML</button>
        <button style={{marginLeft:"10px"}}>CSS</button>
        <button style={{marginLeft:"10px"}}>JavaScript</button>
        <button style={{marginLeft:"10px"}}>React</button>
        <div className='links'>
        <button><a href="https://react-todo-simple-app-p7ng.vercel.app/" target='_blank'><FontAwesomeIcon style={{fontSize:"20px"}} icon={faShareFromSquare} /> Live</a></button>
        <button className='btn2' style={{marginLeft:"10px"}}><a  href="https://github.com/Shoaib-Khan90/React-Todo-Simple-App" target='_blank'><FontAwesomeIcon style={{fontSize:"20px"}} icon={faGithub} size="2x" /> Github</a></button>
        </div>
        </div>

        <div className='project'>
          <div className='img'>
        <img src="./Images/project9.png" width="160px" height="150px" alt="" />
        </div>
        <h1>Firebase Ecommerce Website</h1>
        <p>Developed an Ecommerce Website using Firebase with features like user authentication and real-time database.
Users can browse products, add to cart, and manage their orders.
Focused on modern UI, performance, and real-world functionality.
</p>
        <button>HTML</button>
        <button style={{marginLeft:"10px"}}>CSS</button>
        <button style={{marginLeft:"10px"}}>JavaScript</button>
        <button style={{marginLeft:"10px"}}>React</button>
        <div className='links'>
        <button><a href="https://firebase-ecommerce-website.vercel.app/" target='_blank'><FontAwesomeIcon style={{fontSize:"20px"}} icon={faShareFromSquare} /> Live</a></button>
        <button className='btn2' style={{marginLeft:"10px"}}><a  href="https://github.com/Shoaib-Khan90/Firebase-Ecommerce-Website" target='_blank'><FontAwesomeIcon style={{fontSize:"20px"}} icon={faGithub} size="2x" /> Github</a></button>
        </div>
        </div>

        <div className='project'>
          <div className='img'>
        <img src="./Images/project10.png" width="160px" height="150px" alt="" />
        </div>
        <h1>Moblie Shop</h1>
        <p>Developed a Mobile Shop website showcasing products with detailed views and pricing.
Users can browse different mobiles and explore features easily.
Focused on responsive design and a clean, user-friendly interface.
</p>
        <button>HTML</button>
        <button style={{marginLeft:"10px"}}>CSS</button>
        <button style={{marginLeft:"10px"}}>JavaScript</button>
        <button style={{marginLeft:"10px"}}>React</button>
        <div className='links'>
        <button><a href="https://moblie-shop-x43w.vercel.app/" target='_blank'><FontAwesomeIcon style={{fontSize:"20px"}} icon={faShareFromSquare} /> Live</a></button>
        <button className='btn2' style={{marginLeft:"10px"}}><a  href="https://github.com/Shoaib-Khan90/Moblie-Shop" target='_blank'><FontAwesomeIcon style={{fontSize:"20px"}} icon={faGithub} size="2x" /> Github</a></button>
        </div>
        </div>

        <div className='project'>
          <div className='img'>
        <img src="./Images/project11.png" width="160px" height="150px" alt="" />
        </div>
        <h1>Multi Theme Switcher</h1>
        <p>Developed a Multi Theme Switcher using JavaScript that allows users to change website themes dynamically.
Includes multiple color modes with smooth transitions.
Focused on UI customization and enhanced user experience.
</p>
        <button>HTML</button>
        <button style={{marginLeft:"10px"}}>CSS</button>
        <button style={{marginLeft:"10px"}}>JavaScript</button>
        <div className='links'>
        <button><a href="https://multi-theme-switcher-rho-dusky.vercel.app/" target='_blank'><FontAwesomeIcon style={{fontSize:"20px"}} icon={faShareFromSquare} /> Live</a></button>
        <button className='btn2' style={{marginLeft:"10px"}}><a  href="https://github.com/Shoaib-Khan90/Multi-Theme-Switcher" target='_blank'><FontAwesomeIcon style={{fontSize:"20px"}} icon={faGithub} size="2x" /> Github</a></button>
        </div>
        </div>

        <div className='project'>
          <div className='img'>
        <img src="./Images/project12.png" width="160px" height="150px" alt="" />
        </div>
        <h1>Calculator</h1>
        <p>Developed a Calculator using JavaScript that performs basic arithmetic operations.
Provides instant results with a simple and user-friendly interface.
Focused on logic building and clean UI design.
</p>
        <button>HTML</button>
        <button style={{marginLeft:"10px"}}>CSS</button>
        <button style={{marginLeft:"10px"}}>JavaScript</button>
        <div className='links'>
        <button><a href="https://calculator-kappa-eight-85.vercel.app/" target='_blank'><FontAwesomeIcon style={{fontSize:"20px"}} icon={faShareFromSquare} /> Live</a></button>
        <button className='btn2' style={{marginLeft:"10px"}}><a  href="https://github.com/Shoaib-Khan90/Calculator" target='_blank'><FontAwesomeIcon style={{fontSize:"20px"}} icon={faGithub} size="2x" /> Github</a></button>
        </div>
        </div>

        <div className='project'>
          <div className='img'>
        <img src="./Images/project13.png" width="160px" height="150px" alt="" />
        </div>
        <h1>Whether App </h1>
        <p>Developed a Weather App using JavaScript and API integration to fetch real-time weather data.
Displays temperature, conditions, and location-based updates.
Focused on API handling and a clean, user-friendly interface.
</p>
        <button>HTML</button>
        <button style={{marginLeft:"10px"}}>CSS</button>
        <button style={{marginLeft:"10px"}}>JavaScript</button>
        <div className='links'>
        <button><a href="https://whether-app-drab.vercel.app/" target='_blank'><FontAwesomeIcon style={{fontSize:"20px"}} icon={faShareFromSquare} /> Live</a></button>
        <button className='btn2' style={{marginLeft:"10px"}}><a  href="https://github.com/Shoaib-Khan90/Whether-App" target='_blank'><FontAwesomeIcon style={{fontSize:"20px"}} icon={faGithub} size="2x" /> Github</a></button>
        </div>
        </div>

        <div className='project'>
          <div className='img'>
        <img src="./Images/project14.png" width="160px" height="150px" alt="" />
        </div>
        <h1>Counter </h1>
        <p>Developed a Counter application using JavaScript to increase, decrease, and reset values.
Provides instant updates with simple interactive buttons.
Focused on DOM manipulation and basic logic building.
</p>
        <button>HTML</button>
        <button style={{marginLeft:"10px"}}>CSS</button>
        <button style={{marginLeft:"10px"}}>JavaScript</button>
        <div className='links'>
        <button><a href="https://counter-amber-eight.vercel.app/" target='_blank'><FontAwesomeIcon style={{fontSize:"20px"}} icon={faShareFromSquare} /> Live</a></button>
        <button className='btn2' style={{marginLeft:"10px"}}><a  href="https://github.com/Shoaib-Khan90/Counter" target='_blank'><FontAwesomeIcon style={{fontSize:"20px"}} icon={faGithub} size="2x" /> Github</a></button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Works
