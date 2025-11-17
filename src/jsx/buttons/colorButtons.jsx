import React from "react";
import '../../style/buttons.css';

function ColorButtons({ currentStyle, setCurrentStyle, setStyle, historyChange, currentDisplay, mode,  setText={setTexts} }) {
    const current = currentStyle?.color || 'black';//צבע נוכחי

    function handleChange(e) {
        if (!currentDisplay) return;

        const chosenColor = e.target.value;//הצבע שנבחר מרשימת הצבעים

        if (mode === "everything") {
            setStyle(prev =>
                prev.map((s, i) =>
                    i === currentDisplay.id ? { ...s, color: chosenColor } : s
                )
            );

            setText(prev =>
                prev.map((t, i) =>
                    i === currentDisplay.id
                        ? t.map(charObj => ({ ...charObj, style: { ...charObj.style, color: chosenColor } }))
                        : t
                )
            );
            setCurrentStyle(prev => ({
                ...prev,
                color: chosenColor
            }));
        }
        if (mode === "from-now") {
            setCurrentStyle(prev => ({
                ...prev,
                color: chosenColor
            }));
        }
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
