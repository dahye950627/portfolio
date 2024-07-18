import {BrowserRouter, Route, Routes} from "react-router-dom";
import ScrollTop from "@/components/molecules/ScrollTop";
import "./index.css";

import HomePage from "@/components/pages/HomePage";
import AboutPage from "@/components/pages/AboutPage";
import ProjectsPage from "@/components/pages/ProjectsPage";

function App() {
	return (
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			<ScrollTop />
			<Routes>
				<Route path="/" element={<HomePage/>} />
				<Route path="/about" element={<AboutPage/>} />
				<Route path="/projects" element={<ProjectsPage/>} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
