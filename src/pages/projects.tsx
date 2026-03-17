function Projects() {
    const projectImages = [
        "/project1.png",
        "/project2.png",
        "/project3.png",
        "/project4.png"
    ];

    const projectTitles = [
        "Los Muchachos de Ritmo",
        "The Warehouse project",
        "Guestbook App",
        "Surco.studio"
    ];

    return (
        <section className="projects-section">
            <div className="projects-grid">
                {projectImages.map((src, i) => (
                    <div key={i} className="project-card">
                        <img 
                            src={src} 
                            alt={`Project ${i + 1}`} 
                            className="project-image"
                        />
                        <h3 className="project-title">{projectTitles[i]}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;