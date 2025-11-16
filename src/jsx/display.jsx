import React, { useState } from 'react'
import '../style/display.css'

function Display({ text, style, setCurrentDisplay, deleteDisplay, active, fileName, userName }) {
    const handleDelete = () => {
        // שואל את המשתמש אם לשמור
        const saveChanges = window.confirm("Do you want to save changes?");
        if (saveChanges) {
            if (fileName) {
                const updatedDisplay = {
                    text,
                    style,
                    fileName,
                    userName
                };

                localStorage.setItem(fileName, JSON.stringify(updatedDisplay));
                alert(`Saved to ${fileName}`);
                deleteDisplay();
            } else {
                alert("Use Save As first!");
            }
        }
        else { deleteDisplay(); }
    };
    return (
        <div className={`display ${active ? "active-display" : ""}`} onClick={setCurrentDisplay}>
            <button className='delet-display' onClick={handleDelete}>X</button>
            {text.map((t, i) => (
                <span key={i} style={t.style}>
                    {t.char}
                </span>
            ))}
        </div>
    );

};

export default Display;