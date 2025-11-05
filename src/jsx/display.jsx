import React,{useState} from 'react'
import '../style/display.css'

function Display({ text, style }) {
    return (
        <textarea id='text1' style={style} value={text} readOnly />
    );
};

export default Display;