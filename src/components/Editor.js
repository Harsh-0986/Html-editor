import React, { useState } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { Controlled as CodeMirror } from "react-codemirror2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompressAlt, faExpandAlt } from "@fortawesome/free-solid-svg-icons";

const Editor = ({ displayName, language, value, onChange }) => {
	function handleChange(editor, data, value) {
		onChange(value);
	}

	const [open, setOpen] = useState(true);

	return (
		<div className={`editor-container ${open ? "" : "collapsed"}`}>
			<div className="editor-title">
				{displayName}
				<button
					type="button"
					className="expand-collapse-btn"
					onClick={() => setOpen((prevOpen) => !prevOpen)}
				>
					<FontAwesomeIcon
						icon={open ? faCompressAlt : faExpandAlt}
					/>
				</button>
			</div>
			<CodeMirror
				onBeforeChange={handleChange}
				value={value}
				className="code-mirror-wrapper"
				options={{
					lineWrapping: true,
					lint: true,
					mode: language,
					theme: "material",
					lineNumbers: true,
				}}
			/>
		</div>
	);
};

export default Editor;
