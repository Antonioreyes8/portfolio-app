import Header from "./sections/header";
import Menu from "./sections/menu";
import About from "./pages/about";
import Projects from "./pages/projects";
import Contact from "./pages/contact";

import "./styles/projects.css";
import "./styles/header.css";
import "./styles/global.css";
import "./styles/menu.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	return (
		<Router>
			<Header />
			<div
				style={{
					display: "flex",
					width: "100vw",
				}}
			>
				<div
					style={{
						width: "50%",
					}}
				>
					<Menu />
				</div>
        
				<Routes>
					<Route path="/about" element={<About />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
