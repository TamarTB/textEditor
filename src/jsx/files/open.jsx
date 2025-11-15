import React, { useState } from "react";

function Open({ texts, setText, styles, setStyle, fileList, setFileList, displays, setDisplays, displayCounter, setDisplayCounter, setCurrentDisplay }) {
    const [selectedFile, setSelectedFile] = useState("");

    const openFile = () => {
        if (!selectedFile) return alert("Select a file first!");

        const myFile = JSON.parse(localStorage.getItem(selectedFile));

        setText(prev => [...prev, myFile.text]);
        setStyle(prev => [...prev, myFile.style]);

        const newDisplay = {
            id: displayCounter,
            text: myFile.text,
            style: myFile.style
        };
        setDisplays(prev => [...prev, newDisplay]);
        setCurrentDisplay(newDisplay);
        setDisplayCounter(prev => prev + 1);

        localStorage.setItem("currentFile", selectedFile);
        setSelectedFile(""); 
    }

    return (
        <div>
            <select
                value={selectedFile}
                onChange={(e) => setSelectedFile(e.target.value)}
            >
                <option value="">-- Select a file --</option>
                {fileList.map(file => (
                    <option key={file} value={file}>{file}</option>
                ))}
            </select>
            <button onClick={openFile}>Open</button>
        </div>
    );
}

export default Open;
