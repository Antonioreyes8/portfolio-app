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
          flexDirection: "row", // desktop default
          width: "100vw",
          flexWrap: "wrap",     // allow wrapping on smaller screens
        }}
      >
        <div
          style={{
            flex: "1 1 300px", // grow/shrink, min width 300px
            minWidth: "300px",
          }}
        >
          <Menu />
        </div>

        <div
          style={{
            flex: "2 1 600px",
            minWidth: "300px",
          }}
        >
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
