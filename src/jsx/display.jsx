import React,{useState} from 'react'
import '../style/display.css'

function Display({ text, style, updateCurrentDisplay}) {
    return (
        <textarea className='displayArea' style={style} value={text} onClick={updateCurrentDisplay} readOnly />
    );
};

export default Display;