import React from "react";
import '../../style/buttons.css';

function UndoButton({setHistory, setText, setStyle, currentDisplay }) {
  const handleUndo = () => {
    if (!currentDisplay) return;
    setHistory(prev => {
      //נחפש את המצב האחרון שהיה בדיספליי הנוכחי
      const index = [...prev].reverse().findIndex(h => h.id === currentDisplay.id);
      if (index === -1) return prev;
      const last = [...prev].reverse()[index];
      setText(prevTexts => prevTexts.map((t,i) => i===currentDisplay.id ? last.text : t));
      setStyle(prevStyles => prevStyles.map((s,i) => i===currentDisplay.id ? last.style : s));
      const newHistory = [...prev];
      newHistory.splice(prev.length-1-index,1);
      return newHistory;
    });
  }

  return <button className='undoButton' onClick={handleUndo}>↩️</button>;
}

export default UndoButton;
