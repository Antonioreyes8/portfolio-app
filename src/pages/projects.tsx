function Projects() {
    return (
        <section className="projects-section">
            <div className="projects-grid">
                {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="project-card">
                        Project {i + 1}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;