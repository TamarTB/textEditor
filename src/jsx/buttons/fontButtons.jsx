import React from "react";
import '../../style/buttons.css';

function FontButtons({ style, setStyle, historyChange, currentDisplay }) {
    const current = style?.fontFamily || 'Arial';
    
    function handleChange(e) {
        if (!currentDisplay) return;
        setStyle(prevStyles => prevStyles.map((s,i) => 
            i === currentDisplay.id ? { ...s, fontFamily: e.target.value } : s
        ));
        historyChange();
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

export default FontButtons;
