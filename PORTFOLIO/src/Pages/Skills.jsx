import React from "react";
import "./Skills.css";
import { Link } from "react-router";

const categories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "C", level: 75 },
      { name: "C++", level: 70 },
      { name: "Java", level: 80 },
      { name: "JavaScript", level: 95 },
      { name: "Python", level: 70 },
    ],
  },
  {
    title: "Web Development",
    skills: [
      { name: "React", level: 92 },
      { name: "HTML", level: 100 },
      { name: "CSS", level: 100 },
      { name: "Tailwind", level: 95 },
      { name: "MERN Stack", level: 20 },
      { name: "Next Js", level: 20 },
      { name: "Django", level: 20 },
    ],
  },
  {
    title: "Database & Backend",
    skills: [
      { name: "Firebase", level: 85 },
      { name: "MySQL", level: 20 },
      { name: "PostgreSQL", level: 20 },
      { name: "MongoDB", level: 30 },
      { name: "Node.js", level: 50 },
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git", level: 90 },
      { name: "GitHub", level: 92 },
      { name: "VS Code", level: 95 },
      { name: "Tkinter", level: 78 },
    ],
  },
  {
    title: "Computer Science",
    skills: [
      { name: "Data Structures", level: 85 },
      { name: "Algorithms", level: 82 },
      { name: "Computer Architecture", level: 78 },
      { name: "System Design", level: 75 },
    ],
  },
];

const Skills = () => {
  return (
    <div className="Skills">

      <div className="text3">
        <h1>My Skills</h1>
        <p>
          I have developed strong expertise across multiple areas of software
          development, including programming, web technologies, databases, and
          core computer science concepts. My focus is on writing clean,
          efficient code and continuously improving my skills to build
          high-quality, scalable applications.
        </p>
      </div>

      {/* Stats */}
      <div className="Card">
        <div className="Technologies">
          <h1>10+</h1>
          <h3>Technologies</h3>
        </div>
        <div className="Technologies">
          <h1>5</h1>
          <h3>Categories</h3>
        </div>
        <div className="Technologies">
          <h1>8+</h1>
          <h3>Months Learning</h3>
        </div>
        <div className="Technologies">
          <h1>∞</h1>
          <h3>Passion</h3>
        </div>
      </div>

      {/* Skills Section */}

      <div className="skills-container">
        {categories.map((cat, i) => (
          <div className="skill-card" key={i}>
            <h2>{cat.title}</h2>

            {cat.skills.map((skill, index) => (
              <div className="skill" key={index}>
                
                <div className="skill-top">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>

                <div className="progress">
                  <div
                    className="progress-bar"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="Learning">
        <h1>Continues Learning</h1>
        <p>Technology evolves rapidly, and so do I. I'm constantly learning new frameworks, exploring emerging technologies, and refining my existing skills. My journey in tech is just beginning, and I'm excited about what lies ahead.</p>
        <button>Currently Learning : Next.Js </button>
        <button style={{marginLeft:"20px"}}>Next Goal : Express.Js </button>
        <button style={{marginLeft:"20px"}}>Exploring : AI/ML </button>
      </div>
        <div className="btn1">
     <Link to="/works">
     <button style={{width:"150px", padding:"15px", borderRadius:"10px", backgroundColor:"blue", color:"white", border:"none"}}>View My Projects</button>
     </Link>
     <Link to="/contact">
     <button style={{width:"150px", padding:"15px", borderRadius:"10px", backgroundColor:"blue", color:"white", border:"none", marginLeft:"20px"}}>Lets Collaborate</button>
     </Link>
     </div>
    </div>
  );
};

export default Skills;