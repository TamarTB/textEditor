import React, { useState } from "react";
import '../../style/buttons.css'

function FontButtons({ style, setStyle, historyChange }) {
    const current = style?.fontFamily || 'Arial';
    
    function handleChange(e) {
        setStyle({ ...style, fontFamily: e.target.value });
        historyChange()
    }

    return (
        <div className="font-selector" aria-label="font selector">
            <label htmlFor="fonts">Font</label>
            <select id="fonts" name="fonts" value={current} onChange={handleChange}>
                <option value="Times New Roman" style={{ fontFamily: "Times New Roman" }}>Times New Roman</option>
                <option value="Arial" style={{ fontFamily: "Arial" }}>Arial</option>
                <option value="Courier New" style={{ fontFamily: "Courier New" }}>Courier New</option>
                <option value="Georgia" style={{ fontFamily: "Georgia" }}>Georgia</option>
                <option value="Verdana" style={{ fontFamily: "Verdana" }}>Verdana</option>
                <option value="Comic Sans MS" style={{ fontFamily: "Comic Sans MS" }}>Comic Sans MS</option>
            </select>
        </div>
    );
}

export default FontButtons
