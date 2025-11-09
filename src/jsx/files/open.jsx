import React from "react";

function Open({ texts, setText, styles, setStyle, displays, setDisplays, displayCounter, setDisplayCounter, setCurrentDisplay, fileName, setFileName }) {
    function handleClick() {
        if (!fileName) return alert("Enter a file name!");

        let stored = localStorage.getItem(fileName);

        // אם הקובץ לא קיים, יוצרים חדש
        if (!stored) {
            const newFile = { text: "", style: { fontSize: 16, fontFamily: "Arial", color: "#000", direction: "ltr" } };
            localStorage.setItem(fileName, JSON.stringify(newFile));
            stored = JSON.stringify(newFile);
        }

        const myFile = JSON.parse(stored);

        // מוסיפים טקסט וסטייל ל-state
        setText(prev => [...prev, myFile.text]);
        setStyle(prev => [...prev, myFile.style]);

        // יוצרים display חדש
        const newDisplay = {
            id: displayCounter,
            text: myFile.text,
            style: myFile.style
        };
        setDisplays(prev => [...prev, newDisplay]);
        setCurrentDisplay(newDisplay);
        setDisplayCounter(prev => prev + 1);

        localStorage.setItem("currentFile", fileName);
        setFileName("");
    }

    return (
        <>
            <input 
                placeholder="Enter fileName" 
                value={fileName} 
                onChange={(e) => setFileName(e.target.value)} 
            />
            <button onClick={handleClick}>Open file</button>
        </>
    );
}

export default Open;
