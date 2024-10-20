import React, { useEffect, useState } from 'react';
import projectsData from '../projects.json';
import '../styles/Project.css';

const Project = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects(projectsData);
    }, []);

    return (
        <section id="projects" className="projects-section py-5">
            <h2 className="text-center mb-4">Projects</h2>
            <div
                id="carouselExampleCaptions"
                className="carousel slide mx-auto"
                style={{ width: '80%' }}
                data-bs-ride="carousel" // Enables automatic cycling of the carousel
                data-bs-interval="1500" // Set the interval for auto-scroll (in milliseconds)
                data-bs-pause="hover" // Pause on hover
            >
                <div className="carousel-inner">
                    {projects.map((project, index) => (
                        <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                            <div className="row">
                                {/* Image Column */}
                                <div className="col-md-4 p-5">
                                    <img src={project.image} className="d-block w-100 project-image" alt={project.title} />
                                </div>
                                {/* Paragraph Column */}
                                <div className="col-md-8 p-5">
                                    <div>
                                        <h5>{project.title}</h5>
                                        <ul>
                                            {project.description.map((desc, descIndex) => (
                                                <li key={descIndex}>{desc}</li>
                                            ))}
                                        </ul>
                                    </div>
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
                    {projects.map((project, index) => (
                        <button
                            key={index}
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to={index}
                            className={index === 0 ? 'active' : ''}
                            aria-current={index === 0 ? 'true' : 'false'}
                            aria-label={`Slide ${index + 1}`}
                        ></button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Project;
