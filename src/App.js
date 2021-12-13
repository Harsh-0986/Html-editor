import Editor from "./components/Editor";
import React, { useState, useEffect } from "react";

function App() {
	const [html, setHtml] = useState("");
	const [js, setJs] = useState("");
	const [css, setCss] = useState("");
	const [srcDoc, setSrcDoc] = useState("");

	useEffect(() => {
		const timeout = setTimeout(() => {
			setSrcDoc(`
				<html>
				    <body>${html}</body>
				    <style>${css}</style>
				    <script>${js}</script>
				</html>
			`);
		}, 250);

		return () => clearTimeout(timeout);
	}, [html, css, js]);

	return (
		<>
			<div className="pane top-pane">
				<Editor
					displayName="HTML"
					language="xml"
					value={html}
					onChange={setHtml}
				/>
				<Editor
					displayName="CSS"
					language="css"
					value={css}
					onChange={setCss}
				/>
				<Editor
					displayName="JS"
					language="js"
					value={js}
					onChange={setJs}
				/>
			</div>
			<div className="pane">
				<iframe
					title="output"
					srcDoc={srcDoc}
					sandbox="allow-scripts"
					frameBorder="0"
					width="100%"
					height="100%"
				/>
			</div>
		</>
	);
}

export default App;
