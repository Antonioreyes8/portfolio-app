function Projects() {
    const projects = [
        {
            src: "/project1.png",
            title: "Los Muchachos de Ritmo",
            url: "https://cosas-reverberantes.vercel.app/"
        },
        {
            src: "/project2.png",
            title: "The Warehouse Project",
            url: "https://the-warehouse-project-sigma-six.vercel.app/"
        },
        {
            src: "/project3.png",
            title: "Guestbook App",
            url: "https://guestbook-app-alpha.vercel.app/"
        },
        {
            src: "/project4.png",
            title: "Surco.studio",
            url: "https://surco.studio"
        },
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
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;