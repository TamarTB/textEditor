import React, { useState } from "react";

function SaveAs({ text, style, fileName, setFileName, setFileList, updateDisplayFileName, currentDisplay, isLoggedIn, userName }) {
    const [isVisible, setIsVisible] = useState(false);

    const handleClick = () => {
        if (isLoggedIn) {
            if (!fileName) return alert("Enter a file name!");

            if (currentDisplay.fileName) {
                setFileName("");
                setIsVisible(false);
                return alert("This file has been saved already, go to save.");
            }

            if (localStorage.getItem(fileName)) {
                alert("File name already exists! Please choose a different name.");
                setFileName("");
                return;
            }

            const newDisplay = {
                ...currentDisplay,
                text,
                style,
                fileName,
                userName
            };

            localStorage.setItem(fileName, JSON.stringify(newDisplay));
            updateDisplayFileName(currentDisplay.id, fileName);

            //מעדכנים את רשימת הקבצים של המשתמש הנוכחי
            setFileList(prev => {
                if (!prev.includes(fileName)) return [...prev, fileName];
                return prev;
            });

            setFileName("");
            setIsVisible(false);
        }

    }

    function checkLogged() {
        if (!isLoggedIn)
            alert("Log in first");
        else
            setIsVisible(true);
    }

    return (
        <div className="save-as-wrapper">
            <button onClick={checkLogged}>Save As</button>

            {isVisible && (
                <input
                    className="save-as-input"
                    placeholder="Enter file name"
                    value={fileName}
                    onChange={(e) => setFileName(e.target.value)}
                    onKeyDown={(e) => { if (e.key === "Enter") handleClick(); }}
                />
            )}
        </div>
    );
}

export default SaveAs;
