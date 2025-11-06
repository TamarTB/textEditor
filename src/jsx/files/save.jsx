import React from "react";

function Save({ text, style }) {
    function handleClick() {
        // קוראים את שם הקובץ הנוכחי
        const currentFile = localStorage.getItem("currentFile");

        if (currentFile) {
            // שומרים את הטקסט והסטייל בעזרת שם הקובץ
            localStorage.setItem(currentFile, JSON.stringify({ text, style }));
        } else {
            alert("No current file selected!");
        }
    }

    return <button onClick={handleClick}>save</button>;
}

export default Save;
