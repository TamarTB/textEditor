import React, { useState } from "react";
import '../../style/buttons.css'

function TextButtons({ value, setText, currentDisplay, handleChange,currentStyle }) {
    return (
        <button
            className='textButton'
            onClick={() => {
                if (!currentDisplay) return; // אם אין display נבחר, לא לעשות כלום
                setText(prev => prev.map((t, i) =>
                     i === currentDisplay.id
                        ? [...t, { char: value, style: currentStyle }]
                        : t
                ))
                handleChange();
            }}
        >
            {value}
        </button>
    )
}


export default TextButtons