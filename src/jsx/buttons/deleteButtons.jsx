import React from "react";
import '../../style/buttons.css';

function DeleteButton({setText, handleChange, currentDisplay }) {

  //מחיקת התו האחרון
  const deleteLastChar = () => {
    if (!currentDisplay) return;
    setText(prev => prev.map((t, i) => i === currentDisplay.id ? t.slice(0, -1) : t));
    handleChange();
  }

  //מחיקת מילה אחרונה
  const deleteLastWord = () => {
    if (!currentDisplay) return;
    setText(prev => prev.map((t, i) => {
      if (i !== currentDisplay.id) return t;
      const chars = t; //זה מערך של תווים
      let lastSpaceIndex = -1;
      for (let j = chars.length - 1; j >= 0; j--) {
        if (chars[j].char === ' ') {
          lastSpaceIndex = j;
          break;
        }
      }
      return lastSpaceIndex === -1 ? [] : chars.slice(0, lastSpaceIndex);
    }
    ));
    handleChange();
  };

//מחיקת כל הטקסט
  const deleteAllText = () => {
    if (!currentDisplay) return;
    setText(prev => prev.map((t, i) => i === currentDisplay.id ? [] : t));
    handleChange();
  };


  return (
    <>
      <button className='deleteButton' onClick={deleteLastChar}>⌫</button>
      <button className='deleteButton' onClick={deleteLastWord}>⇐</button>
      <button className='deleteButton' onClick={deleteAllText}>🗑️</button>
    </>
  )
}

export default DeleteButton;
