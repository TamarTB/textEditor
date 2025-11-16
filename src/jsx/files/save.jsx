import React from "react";

function Save({ text, style, currentDisplay ,isLoggedIn}) {
    function handleClick() {
        if (isLoggedIn) {
            if (!currentDisplay) {
                alert("No display selected!");
                return;
            }
            if (!currentDisplay.fileName) {
                alert("Please use 'Save As' first to create a file");
                return;
            }
            const updatedDisplay = {
                ...currentDisplay,
                text,
                style
            };

            localStorage.setItem(currentDisplay.fileName, JSON.stringify(updatedDisplay));
        }
        else{
            alert("Log in first");
        }
    }

    return <button onClick={handleClick}>Save</button>;
}

export default Save;
