import React, { useState } from "react";
import '../../style/buttons.css'

//חיפוש אות
function SearchButtons({ text }) {
    const [letter, setLetter] = useState('');//תו לחיפוש

    function handleClick() {
        if (text.some(charObj => charObj.char === letter)) {
            alert(`התו '${letter}' קיים בטקסט!`);
        } else {
            alert(`התו '${letter}' לא נמצא בטקסט`);
        }
        setLetter('');
    }


    return (
        <>
            <input id="searchInput" placeholder="Enter letter" value={letter} onChange={(e) => setLetter(e.target.value)} />
            <button onClick={handleClick} title="search char">Search</button>
        </>
    )
}

export default SearchButtons;
