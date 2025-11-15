import React from "react";
import '../../style/buttons.css';

function SizeButtons({ currentStyle, setCurrentStyle, setStyle, historyChange, currentDisplay, mode,  setText={setTexts}            // ← הוסיפי את זה
 }) {
    const current = parseInt(currentStyle?.fontSize || '16');

    function increase() {
        if (!currentDisplay) return;

        if (mode === "everything") {
            // משנה את הסטייל של כל הטקסט שהוקלד עד עכשיו
            setStyle(prev =>
                prev.map((s, i) =>
                    i === currentDisplay.id ? { ...s, fontSize: (current + 1) + 'px' } : s
                )
            );
            setText(prev =>
                prev.map((t, i) =>
                    i === currentDisplay.id
                        ? t.map(charObj => ({ ...charObj, style: { ...charObj.style, fontSize: (current + 1) + 'px' } }))
                        : t
                )
            );
             setCurrentStyle(prev => ({
                ...prev,
                fontSize: (current + 1) + 'px'
            }));

        }
        if (mode === "from-now") {
            setCurrentStyle(prev => ({
                ...prev,
                fontSize: (current + 1) + 'px'
            }));
        }
        historyChange();
    }

    function decrease() {
        if (!currentDisplay) return;

        if (mode === "everything") {
            // משנה את הסטייל של כל הטקסט שהוקלד עד עכשיו
            setStyle(prev =>
                prev.map((s, i) =>
                    i === currentDisplay.id ? { ...s, fontSize: (current - 1) + 'px' } : s
                )
            );
            setText(prev =>
                prev.map((t, i) =>
                    i === currentDisplay.id
                        ? t.map(charObj => ({ ...charObj, style: { ...charObj.style, fontSize: (current - 1) + 'px' } }))
                        : t
                )
            );
              setCurrentStyle(prev => ({
                ...prev,
                fontSize: (current - 1) + 'px'
            }));
        }
        if (mode === "from-now") {
            setCurrentStyle(prev => ({
                ...prev,
                fontSize: (current - 1) + 'px'
            }));
        }
        historyChange();
    }

    return (
        <>
            <button id="big" className="sizeButtons" onClick={increase} title="big" >+</button>
            <button id="small" className="sizeButtons" onClick={decrease} title="small">−</button>
        </>
    );
}

export default SizeButtons;
