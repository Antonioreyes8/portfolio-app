function About() {
	return (
		<section className="about-section">
			<div className="information">
				Denton, TX | (972) 746-6608 |
				<span>
					tony<span className="fallback">@</span>surco.studio
				</span>{" "}
				| 25 years old | English & Spanish
			</div>
			<p className="about-text">
				I build software and web experiences that are fast, reliable, and
				purposeful. I work across the full product lifecycle, from early design
				concepts through production-ready architecture and implementation.
			</p>

			<div className="core-stack">
				<h2>Core Stack:</h2>
				<ul className="stack-list">
					<li>
						<span>Frontend:</span> React, Next.js, Tailwind CSS, JavaScript,
						TypeScript
					</li>
					<li>
						<span>Backend & Logic:</span> Python, REST APIs, Node.js
					</li>
					<li>
						<span>Data & Storage:</span> Supabase, PostgreSQL, MySQL
					</li>
					<li>
						<span>Cloud & Hosting:</span> Vercel, AWS, Netlify
					</li>
				</ul>
			</div>
			
		</section>
	);
}

export default About;
