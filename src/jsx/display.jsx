import React, { useState } from 'react'
import '../style/display.css'

function Display({ text, style, setCurrentDisplay }) {
    return (
        <textarea
            className='displayArea'
            style={style}
            value={text}
            onClick={setCurrentDisplay}
            readOnly
        />
    );
};

export default Display;