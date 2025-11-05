import React, { useState } from "react";
import '../../style/buttons.css'

function DeleteButtons({deleteLastChar, handleChange}){
    return(
        <button className='deleteButton' onClick={()=>{deleteLastChar(); handleChange()}}>⌫</button>
    );
};

export default DeleteButtons;