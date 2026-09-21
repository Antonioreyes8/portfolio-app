import { useState } from "react";

function Projects() {
	const [selectedProject, setSelectedProject] = useState<number | null>(null);

	const projects = [
		{
			src: "/project2.png",
			title: "The Warehouse Project",
			url: "https://the-warehouse-project-sigma-six.vercel.app/",
			description:
				"A high-energy event discovery platform and digital showcase tailored for creative gatherings and live sets. Leverages a bold, brutalist-inspired user interface with responsive artist line-up grids, interactive schedule views, and mobile-first navigation.",
			concepts: "UI/UX, Event Discovery, Responsive Design",
			tech: "React, CSS",
		},
		{
			src: "/project4.png",
			title: "Surco.studio",
			url: "https://surco.studio",
			description:
				"The official digital portfolio and identity site for Surco Studio, highlighting custom web design and brand systems. Built around an editorial design system with fluid typography, responsive modular grids, and polished layout transitions.",
			concepts: "Portfolio, Branding, Editorial Design",
			tech: "React, CSS, Vercel",
		},
		{
			src: "/project1.png",
			title: "Los Muchachos de Ritmo",
			url: "https://cosas-reverberantes.vercel.app/",
			description:
				"An immersive audiovisual web experience engineered to translate rhythm and musical energy into interactive digital motion. Features custom CSS animations, dynamic visual states, and lightweight performance optimization built for seamless cross-device playback.",
			concepts: "Interactive Motion, CSS Animations, Cross-device Performance",
			tech: "React, CSS, Vercel",
		},
				{
			src: "/project3.png",
			title: "Guestbook App",
			url: "https://guestbook-app-alpha.vercel.app/",
			description:
				"A full-stack interactive guestbook built to bridge physical spaces with digital keepsakes. Features real-time photo and message submissions, cloud database synchronization, and instant feed hydration with zero-refresh state updates.",
			concepts: "Full-stack, Real-time, Cloud Database",
			tech: "Next.js, API, Vercel",
		},
		{
			src: "/project5.png",
			title: "Dreambuilt",
			url: "https://www.dreambuilt-gc.com/",
			description:
				"A comprehensive commercial and residential general contracting website powered by a custom CMS structure. Features dynamic project showcases, detailed service breakdowns, and optimized quote-request funnels designed to drive inbound client leads.",
			concepts: "CMS, Lead Generation, Project Showcases",
			tech: "Webflow",
		},
		{
			src: "/project6.png",
			title: "Momos Construction",
			url: "https://www.momosconstruction.com/",
			description:
				"A modern construction portfolio platform built to highlight craftsmanship and streamline customer inquiries. Includes structured project categorization, before-and-after transformation galleries, and a frictionless contact funnel for residential builds.",
			concepts: "Portfolio, Contact Funnel, Project Galleries",
			tech: "Webflow",
		},
		{
			src: "/project7.png",
			title: "Aclean",
			url: "https://aclean.space",
			description:
				"A complete web application and booking platform for residential cleaning services. Features an interactive, real-time quote calculator based on home specifications, customizable service tiers, and automated inquiry routing for client onboarding.",
			concepts: "Booking Platform, Real-time Quote Calculator, Client Onboarding",
			tech: "React, Next.js, Tailwind",
		},
		{
			src: "/project8.png",
			title: "Alcalas Renovations",
			url: "https://alcalas-renovations.vercel.app/",
			description:
				"A full-stack remodeling portfolio application developed to showcase interior and exterior renovation projects. Features dynamic project filtering, high-resolution media galleries, and structured consultation request forms built on a TypeScript backend.",
			concepts: "Portfolio, Project Filtering, Consultation Forms",
			tech: "TypeScript, Node.js",
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
