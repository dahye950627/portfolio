import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./index.css";

import Header from "@/components/organisms/Header";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Header page="home"/>} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
