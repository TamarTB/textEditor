import React, { useState } from "react";

function SaveAs({ text, style, fileName, setFileName, setFileList }) {
    const [isVisible, setIsVisible] = useState(false);

    const handleClick = () => {
        if (!fileName) return alert("Enter a file name!");

        localStorage.setItem(fileName, JSON.stringify({ text, style }));
        localStorage.setItem("currentFile", fileName);

        // מעדכנים את fileList שמשותף ל־Open
        setFileList(prev => {
            if (!prev.includes(fileName)) return [...prev, fileName];
            return prev;
        });

        setFileName("");
        setIsVisible(false);
    }

    return (
        <>
            <input
                placeholder="Enter file name"
                value={fileName}
                onChange={(e) => setFileName(e.target.value)}
                style={{ visibility: isVisible ? 'visible' : 'hidden' }}
                onKeyDown={(e) => { if (e.key === "Enter") handleClick(); }}
            />
            <button onClick={() => setIsVisible(true)}>Save As</button>
        </>
    );
}

export default SaveAs;
