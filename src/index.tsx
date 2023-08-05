import { render } from "react-dom";
import React from "react";
import { createRoot } from "react-dom/client";

// import React from "react";
import App from "./app";
import { BrowserRouter } from "react-router-dom";

const root = createRoot(document.getElementById("root")!);
root.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
);
