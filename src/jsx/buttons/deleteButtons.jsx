import React from "react";
import '../../style/buttons.css';

function DeleteButton({ text, setText, handleChange, currentDisplay }) {

  const deleteLastChar = () => {
    if (!currentDisplay) return;
    setText(prev => prev.map((t,i) => i===currentDisplay.id ? t.slice(0,-1) : t));
    handleChange();
  }

  const deleteLastWord = () => {
    if (!currentDisplay) return;
    setText(prev => prev.map((t,i) => {
      if(i!==currentDisplay.id) return t;
      const trimmed = t.trimEnd();
      const lastSpace = trimmed.lastIndexOf(' ');
      return lastSpace===-1 ? '' : trimmed.slice(0,lastSpace);
    }));
    handleChange();
  }

  const deleteAllText = () => {
    if (!currentDisplay) return;
    setText(prev => prev.map((t,i) => i===currentDisplay.id ? '' : t));
    handleChange();
  }

  return (
    <>
      <button className='deleteButton' onClick={deleteLastChar}>⌫</button>
      <button className='deleteButton' onClick={deleteLastWord}>⇐</button>
      <button className='deleteButton' onClick={deleteAllText}>🗑️</button>
    </>
  )
}

export default DeleteButton;
