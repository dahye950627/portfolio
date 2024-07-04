import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import config from "@/assets/config";
import config from "./assets/config"
import "./index.css";
import { ThemeProvider } from "styled-components";

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<ThemeProvider theme={config}>
			<App />
		</ThemeProvider>
	</React.StrictMode>
);

