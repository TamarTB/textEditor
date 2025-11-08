import React, { useState } from "react";
import '../../style/buttons.css'

function UndoButtons({ history, setHistory, setText, setStyle }) {
  const handleUndo = () => {
    setHistory(prev => {
      if (prev.length === 0) return prev;
      const last = prev[prev.length - 1];
      setText(last.text);
      setStyle(last.style);
      return prev.slice(0, -1);
    });
  };

  return (
    <button className='undoButton' title="undo " onClick={handleUndo}>↩️</button>
  );
};

export default UndoButtons;