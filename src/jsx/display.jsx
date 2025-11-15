import React, { useState } from 'react'
import '../style/display.css'

function Display({ text, style, setCurrentDisplay }) {
    return (
        <div className="display" onClick={setCurrentDisplay}>
            {text.map((t, i) => (
                <span key={i} style={t.style}>
                    {t.char}
                </span>
            ))}
        </div>
    );

};

export default Display;