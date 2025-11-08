import React, { useState } from "react";
import '../../style/buttons.css'

function SizeButtons({ style = {}, setStyle, historyChange }) {

    const current = parseInt(style?.fontSize || '12');

    function handleChange(e) {
        setStyle({ ...style, fontSize: e.target.value + 'px' });
        historyChange();
    }

    return (
        <>
            <button id="big" className="sizeButtons" value={current + 1} onClick={handleChange} title="big" >+</button>
            <button id="small" className="sizeButtons" value={current - 1} onClick={handleChange} title="small">−</button>
        </>
    );

}
export default SizeButtons;