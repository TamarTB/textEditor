import React, { useState } from "react";
import '../../style/buttons.css';

function ChangeButtons({ text, setText, historyChange, currentDisplay }) {
    const [fromLetter, setFromLetter] = useState('');
    const [toLetter, setToLetter] = useState('');

    function handleClick() {
        if (!currentDisplay) return;
        setText(prev => prev.map((t, i) => 
            i === currentDisplay.id ? t.replaceAll(fromLetter, toLetter) : t
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
