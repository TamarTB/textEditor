import React, { useState } from "react";
import '../../style/buttons.css'

function DeleteButtons({ text, setText, handleChange }) {

    const deleteLastChar = () => {
        setText(text.slice(0, -1)); // מחזיר את כל הטקסט בלי התו האחרון
    };

    const deleteLastWord = () => {
        text = text.trimEnd();
        const lastSpaceIndex = text.lastIndexOf(' ');
        if (lastSpaceIndex === -1) {
            setText('');
        }
        else {
            setText(text.slice(0, lastSpaceIndex));
        }
    };

    const deleteAllText = () => {
        setText('');
    };
    return (
        <>
            <button id="deleteChar" className='deleteButton' onClick={() => { deleteLastChar(); handleChange() }}>⌫</button>
            <button id="deleteWord" className='deleteButton' onClick={() => { deleteLastWord(); handleChange() }}>⇐</button>
            <button id="deleteText" className='deleteButton' onClick={() => { deleteAllText(); handleChange() }}>🗑️</button>
        </>
    );
};

export default DeleteButtons;