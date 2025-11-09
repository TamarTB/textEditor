import React, { useState } from "react";
import '../../style/buttons.css'

function TextButtons({ value, setText, currentDisplay, handleChange }) {
    return (
        <button 
            className='textButton' 
            onClick={() => {
                if (!currentDisplay) return; // אם אין display נבחר, לא לעשות כלום
                setText(prev => 
                    prev.map((t, i) => 
                        i === currentDisplay.id ? t + value : t
                    )
                );
                handleChange();
            }}
        >
            {value}
        </button>
    )
}


export default TextButtons