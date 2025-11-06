import React from "react";

function SaveAs({ text, style, fileName, setFileName }) {
    const handleClick = () => {
        if (!fileName) return alert("Enter a file name!");

        // שומרים קובץ חדש
        localStorage.setItem(fileName, JSON.stringify({ text, style }));
        localStorage.setItem("currentFile", fileName); // מגדירים אותו כקובץ נוכחי
        setFileName("");
    }

    return (
        <button onClick={handleClick}>Save As</button>
    )
}

export default SaveAs;
