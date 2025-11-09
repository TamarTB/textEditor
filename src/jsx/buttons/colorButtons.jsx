import React from "react";
import '../../style/buttons.css';

function ColorButtons({ style, setStyle, historyChange, currentDisplay }) {
    const current = style?.color || 'black';

    function handleChange(e) {
        if (!currentDisplay) return;
        setStyle(prevStyles => prevStyles.map((s,i) => 
            i === currentDisplay.id ? { ...s, color: e.target.value } : s
        ));
        historyChange();
    }

    return (
        <div className="color-selector" aria-label="color selector">
            <label htmlFor="colors">Color</label>
            <select id="colors" name="colors" value={current} onChange={handleChange}>
                <option value="black" style={{ color: "black" }}>Black</option>
                <option value="red" style={{ color: "red" }}>Red</option>
                <option value="blue" style={{ color: "blue" }}>Blue</option>
                <option value="green" style={{ color: "green" }}>Green</option>
                <option value="purple" style={{ color: "purple" }}>Purple</option>
                <option value="orange" style={{ color: "orange" }}>Orange</option>
            </select>
        </div>
    );
}

export default ColorButtons;
