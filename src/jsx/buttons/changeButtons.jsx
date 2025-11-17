import React, { useState } from "react";
import '../../style/buttons.css';

//החלפת אות
function ChangeButtons({setText, historyChange, currentDisplay }) {
    const [fromLetter, setFromLetter] = useState('');//איזו אות להחליף
    const [toLetter, setToLetter] = useState('');//לאיזו אות להחליף

    function handleClick() {
        if (!currentDisplay) return;
        setText(prev => prev.map((t, i) =>
            i === currentDisplay.id
                ? t.map(charObj => ({
                    ...charObj,
                    char: charObj.char === fromLetter ? toLetter : charObj.char
                }))
                : t
        ));
        historyChange();
        setFromLetter('');
        setToLetter('');
    }

    return (
        <div className="buttons-row change-buttons-row">
            <input placeholder="from letter" value={fromLetter} onChange={(e) => setFromLetter(e.target.value)} />
            <input placeholder="to letter" value={toLetter} onChange={(e) => setToLetter(e.target.value)} />
            <button onClick={handleClick} title="change">change</button>
        </div>
    )
}

export default ChangeButtons;
