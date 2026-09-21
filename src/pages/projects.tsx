import { useState } from "react";

function Projects() {
	const [selectedProject, setSelectedProject] = useState<number | null>(null);

	const projects = [
		{
			src: "/project2.png",
			title: "The Warehouse Project",
			url: "https://the-warehouse-project-sigma-six.vercel.app/",
			description:
				"A high-energy event and artist discovery platform.",
			concepts: "Artist profiles with OAuth secure login, admin profile management.",
			tech: "React, CSS, Supabase",
		},
		{
			src: "/project4.png",
			title: "Surco.studio",
			url: "https://surco.studio",
			description:
				"Digital design studio with store for featured services",
			concepts: "UI/UX design, service catalog",
			tech: "React, CSS, Vercel",
		},
		{
			src: "/project1.png",
			title: "Los Muchachos de Ritmo",
			url: "https://cosas-reverberantes.vercel.app/",
			description:
				"Collaborative recommendations platform for music, movies, etc.",
			concepts: "REST API, simple UI",
			tech: "React, CSS, Vercel, Supabase",
		},
				{
			src: "/project3.png",
			title: "Guestbook App",
			url: "https://guestbook-app-alpha.vercel.app/",
			description:
				"Full stack guestbook application with Supabase database integration.",
			concepts: "Full-stack, Real-time, Cloud Database",
			tech: "Next.js, API, Vercel, Supabase",
		},
		{
			src: "/project5.png",
			title: "Dreambuilt",
			url: "https://www.dreambuilt-gc.com/",
			description:
				"",
			concepts: "CMS, Contact Funnel, Project Showcases",
			tech: "React, Vercel",
		},
		{
			src: "/project6.png",
			title: "Momos Construction",
			url: "https://www.momosconstruction.com/",
			description:
				"A modern construction portfolio platform built to highlight previous projects and streamline customer inquiries.",
			concepts: "Contact Funnel, Project Galleries",
			tech: "Webflow",
		},
		{
			src: "/project7.png",
			title: "Aclean",
			url: "https://aclean.space",
			description:
				"A complete web application and booking platform for residential cleaning services.",
			concepts: "Intuitive layout, Contact Funnel",
			tech: "React, Tailwind",
		},
		{
			src: "/project8.png",
			title: "Alcalas Renovations",
			url: "https://alcalas-renovations.vercel.app/",
			description:
				"Portfolio website for a residential renovation company, showcasing past projects and services.",
			concepts: "Clean simple design, responsive interface, Contact Funnel",
			tech: "React, CSS, Vercel",
		},
	];

	return (
		<section className="projects-section">
			<div className="projects-grid">
				{projects.map((project, i) => (
					/* Simply tags the first two indexes with 'featured' */
					<div key={i} className={`project-card ${i < 2 ? "featured" : ""}`}>
						{i < 2 && <span className="featured-badge">PINNED</span>}

						<button
							type="button"
							onClick={() => setSelectedProject(i)}
							className="project-link"
						>
							<div className="image-wrapper">
								<img
									src={project.src}
									alt={project.title}
									className="project-image"
								/>
							</div>
							<h3 className="project-title">{project.title}</h3>
						</button>

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
				<div className="modal-overlay" onClick={() => setSelectedProject(null)}>
					<div className="modal-content" onClick={(e) => e.stopPropagation()}>
						<button
							className="modal-close"
							onClick={() => setSelectedProject(null)}
						>
							✕
						</button>

						<h2>{projects[selectedProject].title}</h2>
						<p>{projects[selectedProject].description}</p>
						<p>
							<strong>Key Concepts: </strong>{projects[selectedProject].concepts}</p>
						<p>
							<strong>Tech: </strong> {projects[selectedProject].tech}
						</p>

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
