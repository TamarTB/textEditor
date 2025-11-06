import React, { useState } from "react";
import '../../style/buttons.css'
function ChangeButtons({ text, setText, historyChange }) {
    const [fromLetter, setFromLetter] = useState('');
    const [ToLetter, setToLetter] = useState('');
    function handleClick() {
        if (text.includes(fromLetter)) {
            setText(text.replaceAll(fromLetter, ToLetter));
            historyChange();
        } else {
            alert(`התו '${fromLetter}' לא נמצא בטקסט`);
        }
        setFromLetter('');
        setToLetter('');
    }

    return (
        <>
            <input placeholder="from letter" value={fromLetter} onChange={(e) => setFromLetter(e.target.value)} />
            <input placeholder="to letter" value={ToLetter} onChange={(e) => setToLetter(e.target.value)} />
            <button onClick={handleClick}>change</button>
        </>
    )
}
export default ChangeButtons;