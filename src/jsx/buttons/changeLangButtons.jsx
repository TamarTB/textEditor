import React, { useState } from "react";
import '../../style/buttons.css'

function ChangeLangButtons({changeLayout}) {
    return (
        <button className='changeLangButton' onClick={changeLayout}>🌐</button>
    )
}
export default ChangeLangButtons
