import { useNavigate } from "react-router-dom";

function Menu() {
	const navigate = useNavigate();

	return (
		<nav className="menu-container">
			<ul className="menu-list">
				<li className="menu-item-about">
					<button onClick={() => navigate("/about")}>
						About
					</button>
				</li>

				<li className="menu-item-projects">
					<button onClick={() => navigate("/projects")}>
						Projects
					</button>
				</li>

				<li className="menu-item-contact">
					<button onClick={() => navigate("/contact")}>
						Contact
					</button>
				</li>
			</ul>
		</nav>
	);
}

export default Menu;
