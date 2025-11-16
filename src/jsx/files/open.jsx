import React, { useState } from "react";

function Open({ texts, setText, styles, setStyle, fileList, setFileList, displays, setDisplays, displayCounter, setDisplayCounter, setCurrentDisplay, isLoggedIn }) {
    const [selectedFile, setSelectedFile] = useState("");

    const openFile = () => {
        if (isLoggedIn) {
            if (!selectedFile) return alert("Select a file first!");

            const myFile = JSON.parse(localStorage.getItem(selectedFile));

            setText(prev => [...prev, myFile.text]);
            setStyle(prev => [...prev, myFile.style]);

            const newDisplay = {
                id: displayCounter,
                text: myFile.text,
                style: myFile.style,
                fileName: myFile.fileName,
                userName:myFile.userName
            };
            setDisplays(prev => [...prev, newDisplay]);
            setCurrentDisplay(newDisplay);
            setDisplayCounter(prev => prev + 1);
            setSelectedFile("");
        }
        else{
            alert("Log in first");
        }
    }

    return (
        <div>
            <button onClick={openFile}>Open</button>
            <select
                value={selectedFile}
                onChange={(e) => setSelectedFile(e.target.value)}
            >
                <option value="">-- Select a file --</option>
                {fileList.map(file => (
                    <option key={file} value={file}>{file}</option>
                ))}
            </select>
        </div>
    );
}

export default Open;
