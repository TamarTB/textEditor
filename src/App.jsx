import React, { useState } from 'react'
import './App.css'
import Display from './jsx/display'
import Editor from './jsx/editor'
import FilesButtons from './jsx/filesButtons'

function App() {
  const [text, setText] = useState('');
  const [style, setStyle] = useState({
    fontSize: 16,
    fontFamily: "Arial",
    color: "#000",
    direction: "ltr"
  });

  const [displays, setDisplays] = useState([]); // 🔹 זה במקום let displays = []
  const [displayCounter, setDisplayCounter] = useState(1);
  const [currentDisplay, setCurrentDisplay]=useState();

  function pushNewDisplay() {
    const newDisplay = { 
      id: 'display' + displayCounter, 
      text: text, 
      style: style 
    };
    setDisplays(prev => [...prev, newDisplay]); // 🔹 מעדכן את ה־state
    setDisplayCounter(prev => prev + 1);
    setCurrentDisplay(newDisplay);
  }

  return (
    <div className="app-container">
      <button onClick={pushNewDisplay}>New Display</button>

      <div className="display-container">
        {displays.map((i) => (
          <Display key={i.id} text={i.text} style={i.style} id={i.id} />
        ))}
      </div>

      <Editor text={text} setText={setText} style={style} setStyle={setStyle} />
      <FilesButtons text={text} setText={setText} style={style} setStyle={setStyle} />
    </div>
  )
}

export default App
