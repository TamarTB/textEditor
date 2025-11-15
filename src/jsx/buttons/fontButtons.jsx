import React from "react";
import '../../style/buttons.css';

function FontButtons({ setStyle, historyChange, currentDisplay, mode, currentStyle, setCurrentStyle,  setText={setTexts}            // ← הוסיפי את זה
 }) {
    const current = currentStyle?.fontFamily || 'Arial';

    function handleChange(e) {
        if (!currentDisplay) return;

        const chosenFont = e.target.value;

        if (mode === "everything") {
            // משנה את הסטייל של כל הטקסט שהוקלד עד עכשיו
            setStyle(prev =>
                prev.map((s, i) =>
                    i === currentDisplay.id ? { ...s, fontFamily: chosenFont } : s
                )
            );
            setText(prev =>
                prev.map((t, i) =>
                    i === currentDisplay.id
                        ? t.map(charObj => ({ ...charObj, style: { ...charObj.style, fontFamily: chosenFont } }))
                        : t
                )
            );
            setCurrentStyle(prev => ({
                ...prev,
                fontFamily: chosenFont
            }));
        }
        if (mode === "from-now") {
            setCurrentStyle(prev => ({
                ...prev,
                fontFamily: chosenFont
            }));
        }
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
