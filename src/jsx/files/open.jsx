import React from "react";

function Open({ setText, setStyle, fileName, setFileName }) {
    function handleClick() {
        if (!fileName) return alert("Enter a file name!");

        let stored = localStorage.getItem(fileName);

        // אם הקובץ לא קיים — יוצרים אובייקט חדש
        if (!stored) {
            const newFile = { text: "", style: {} };
            localStorage.setItem(fileName, JSON.stringify(newFile));
            stored = JSON.stringify(newFile);
        }

        const myFile = JSON.parse(stored);

        setText(myFile.text);
        setStyle(myFile.style);
        localStorage.setItem("currentFile", fileName); // מסמנים אותו כקובץ נוכחי
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
    )
}

export default Open;
