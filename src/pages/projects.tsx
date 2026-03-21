import { useState } from "react";

function Projects() {
    const [selectedProject, setSelectedProject] = useState<number | null>(null);

    const projects = [
        {
            src: "/project1.png",
            title: "Los Muchachos de Ritmo",
            url: "https://cosas-reverberantes.vercel.app/",
            description: "Music-focused web experience with immersive visuals.",
            tech: "React, CSS, Vercel"
        },
        {
            src: "/project2.png",
            title: "The Warehouse Project",
            url: "https://the-warehouse-project-sigma-six.vercel.app/",
            description: "Event-inspired layout with bold UI design.",
            tech: "React, CSS"
        },
        {
            src: "/project3.png",
            title: "Guestbook App",
            url: "https://guestbook-app-alpha.vercel.app/",
            description: "Users can leave and view messages in real time.",
            tech: "Next.js, API, Vercel"
        },
        {
            src: "/project4.png",
            title: "Surco.studio",
            url: "https://surco.studio",
            description: "Clean portfolio site with modern design.",
            tech: "React, Tailwind"
        },
        {
            src: "/project5.png",
            title: "Dreambuilt",
            url: "https://www.dreambuilt-gc.com/",
            description: "Construction company website with sleek UI.",
            tech: "Webflow"
        },
        {
            src: "/project6.png",
            title: "Momos Construction",
            url: "https://www.momosconstruction.com/",
            description: "Construction company website with sleek UI.",
            tech: "Webflow"
        }
    ];

    return (
        <section className="projects-section">
            <div className="projects-grid">
                {projects.map((project, i) => (
                    <div key={i} className="project-card">

                        <a 
                            href={project.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="project-link"
                        >
                            <img 
                                src={project.src} 
                                alt={project.title} 
                                className="project-image"
                            />
                            <h3 className="project-title">{project.title}</h3>
                        </a>

                        <button 
                            className="learn-more-btn"
                            onClick={() => setSelectedProject(i)}
                        >
                            Learn more
                        </button>

                    </div>
                ))}
            </div>

            {/* Modal */}
            {selectedProject !== null && (
                <div 
                    className="modal-overlay"
                    onClick={() => setSelectedProject(null)}
                >
                    <div 
                        className="modal-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button 
                            className="modal-close"
                            onClick={() => setSelectedProject(null)}
                        >
                            ✕
                        </button>

                        <h2>{projects[selectedProject].title}</h2>
                        <p>{projects[selectedProject].description}</p>
                        <p><strong>Tech:</strong> {projects[selectedProject].tech}</p>

                        <a 
                            href={projects[selectedProject].url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View Project
                        </a>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Projects;