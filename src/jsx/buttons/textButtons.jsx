import React, { useState } from "react";
import '../../style/buttons.css'

function TextButtons({ value, setText, handleChange}) {
    return (
        <button className='textButton' onClick={() => {setText(prev => prev + value); handleChange();}}>{value}</button>
    )
}

export default TextButtons