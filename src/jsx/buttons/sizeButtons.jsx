import React from "react";
import '../../style/buttons.css';

function SizeButtons({ style = {}, setStyle, historyChange, currentDisplay }) {
    const current = parseInt(style?.fontSize || '12');

    function increase() {
        if (!currentDisplay) return;
        setStyle(prevStyles => prevStyles.map((s,i) => 
            i === currentDisplay.id ? { ...s, fontSize: (current + 1) + 'px' } : s
        ));
        historyChange();
    }

    function decrease() {
        if (!currentDisplay) return;
        setStyle(prevStyles => prevStyles.map((s,i) => 
            i === currentDisplay.id ? { ...s, fontSize: (current - 1) + 'px' } : s
        ));
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
