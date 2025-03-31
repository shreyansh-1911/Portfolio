import React, { useEffect, useState } from 'react';
import nirvanaImage from '../Images/nirvana.png';
import sdgImage from '../Images/sdg8.png';
import alumniImage from '../Images/alumni.png';
import automationImage from '../Images/automation.png';
import tkinterImage from '../Images/tkinter.png';
import foodOrderImage from '../Images/foodorder.png';
import smartShelvesImage from '../Images/Smartshelves.png';
import '../styles/Project.css';

const projectsData = [
    {
        title: "Food Ordering WebApp",
        image: foodOrderImage,
        description: [
            "Built a MERN stack food ordering app enabling menu browsing, cart management, and seamless order placement.",
            "Integrated Stripe for secure real-time payment processing with custom success and failure redirects.",
            "Secured user features with JWT-based authentication and authorization.",
            "Designed a Node.js and MongoDB backend for managing orders, user data, order tracking, and admin functionalities."
        ],
        codeLink: "https://github.com/shreyansh-1911/Food-Ordering"
    },
    {
        title: "Smart Shelves",
        image: smartShelvesImage,
        description: [
            "Engineered a Smart Shelves system integrating IoT sensors (ultrasonic, IR, and load cells) with NodeMCU to monitor and calculate real-time product stock levels for 4 products via a React and Bootstrap-based frontend.",
            "Leveraged data-driven insights using APIs and mathematical formulas, improving stock tracking accuracy by over 95%, with real-time updates displayed on the frontend.",
            "Streamlined discount management by processing CSV data to identify demand patterns, automatically applying discounts to high-demand items, showing on LCD display."
        ],
        codeLink: "https://github.com/varunpareek690/Smart-Shelves"
    },
    {
        title: "Nirvana (Website)",
        image: nirvanaImage,
        description: [
            "Developed Nirvana Alive website using HTML, CSS, JavaScript for frontend and Node.js for backend.",
            "Implemented features such as Audio therapy, Reading Therapy, Yoga therapy, Talking therapy, and feedback to the admin.",
            "Hosted the site: https://nirvanalive.netlify.app/#services."
        ],
        liveLink: "https://nirvanalive.netlify.app/"
    },
    {
        title: "Data Analysis on SDG 8",
        image: sdgImage,
        description: [
            "Conducted extensive research on SDG-8, focusing on the impact of tourism, entrepreneurship, and financial services on economic development and the job market in India.",
            "Utilized advanced analytical techniques like matrices, graphs, linear regression, and correlation."
        ],
        reportLink: "https://drive.google.com/file/d/1NWlro2Ag6lO3lgqTwEddlp2xNYys9K4h/view?usp=sharing"
    },
    {
        "title": "Alumni Management System",
        "image": alumniImage,
        "description": [
            "Technology Used : HTML, CSS, JS, MySQL, XAMPP",
            "Implemented a comprehensive database management system using MySQL to facilitate real-time updates of alumni information and events by administrators.",
            "Created a user-friendly website interface allowing students seamless access to alumni data, career details, and upcoming events.",
            "Enhanced engagement and connectivity within the college community."
        ]
    },
    {
        "title": "Auto Pass Pro",
        "image": automationImage,
        "description": [
            "Technology Used : Arduino",
            "Designed and implemented an automation project utilizing microcontroller technology, IR sensors, servo motors, LCD display, and ultrasonic sensors.",
            "Developed a system where vehicle detection triggers automatic door opening while displaying vehicle distance on an LCD screen."
        ]
    },
    {
        "title": "Vehicle Fuel Expenses",
        "image": tkinterImage,
        "description": [
            "Technology Used : Python, Tkinter",
            "Created a GUI using Tkinter focused on fuel consumption calculation.",
            "Utilized preset petrol and diesel prices alongside user-input vehicle mileage and distance parameters.",
            "Calculated fuel usage and corresponding cost based on selected fuel type, vehicle, and distance in kilometers."
        ]
    }
];

const Project = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects(projectsData);
    }, []);

    return (
        <section id="projects" className="projects-section py-5">
            <h2 className="text-center mb-4">Projects</h2>
            <div id="carouselExampleCaptions" className="carousel slide mx-auto" style={{ width: '80%' }} data-bs-ride="carousel" data-bs-interval="9000" data-bs-pause="hover">
                <div className="carousel-inner">
                    {projects.map((project, index) => (
                        <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                            <div className="row">
                                <div className="col-md-4 px-5">
                                    <div className="project-image-container">
                                        <img src={project.image} className="d-block w-100 project-image" alt={project.title} />
                                    </div>
                                </div>
                                <div className="col-md-8 px-5">
                                    <div className="project-header">
                                        <h5 className="mb-0">{project.title}</h5>
                                        <div className="project-buttons">
                                            {project.codeLink && <a href={project.codeLink} className="btn btn-code" target="_blank" rel="noopener noreferrer">Code</a>}
                                            {project.liveLink && <a href={project.liveLink} className="btn btn-live" target="_blank" rel="noopener noreferrer">Live</a>}
                                            {project.reportLink && <a href={project.reportLink} className="btn btn-report" target="_blank" rel="noopener noreferrer">Report</a>}
                                        </div>
                                    </div>
                                    <ul className="project-description">
                                        {project.description.map((desc, descIndex) => (
                                            <li key={descIndex}>{desc}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                <div className="carousel-indicators">
                    {projects.map((_, index) => (
                        <button key={index} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={index} className={index === 0 ? 'active' : ''} aria-current={index === 0 ? 'true' : 'false'} aria-label={`Slide ${index + 1}`}></button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Project;