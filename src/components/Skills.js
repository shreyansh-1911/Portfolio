import React from 'react';
import { FaJava, FaPython, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaCogs, FaChartBar, FaDraftingCompass } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiMysql, SiArduino, SiNumpy, SiPandas } from 'react-icons/si';
import '../styles/Skills.css'; 

const skillsData = [
    { name: 'Java', icon: <FaJava /> },
    { name: 'C', icon: <FaCogs /> }, 
    { name: 'Python', icon: <FaPython /> },
    { name: 'HTML', icon: <FaHtml5 /> },
    { name: 'CSS', icon: <FaCss3Alt /> },
    { name: 'JavaScript', icon: <FaJs /> },
    { name: 'React JS', icon: <FaReact /> },
    { name: 'Node JS', icon: <FaNodeJs /> },
    { name: 'Express', icon: <SiExpress /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'MySQL', icon: <SiMysql /> },
    { name: 'NumPy', icon: <SiNumpy /> }, 
    { name: 'Pandas', icon: <SiPandas /> }, 
    { name: 'Matplotlib', icon: <FaChartBar /> }, // General chart icon for Matplotlib
    { name: 'Git', icon: <FaGitAlt /> },
    { name: 'Arduino', icon: <SiArduino /> },
    { name: 'AutoCAD', icon: <FaDraftingCompass /> }, // Using drafting compass for AutoCAD
];

const Skills = () => {
    return (
        <div id='skills' className="skills-container">
            <h2 className='text-white mb-3'>Skills</h2>
            <div className="skills-grid">
                {skillsData.map((skill, index) => (
                    <div className="skill-card" key={index}>
                        {skill.icon}
                        <p>{skill.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
