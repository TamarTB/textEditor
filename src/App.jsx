import React, { useState } from 'react'
import './App.css'
import Display from './jsx/display'
import Editor from './jsx/editor'
import FilesButtons from './jsx/filesButtons'

function App() {
  const [texts, setTexts] = useState([]);
  const [styles, setStyles] = useState([]);

  const [displays, setDisplays] = useState([]); 
  const [displayCounter, setDisplayCounter] = useState(0);
  const [currentDisplay, setCurrentDisplay] = useState();

  function pushNewDisplay() {
    setTexts(prev => [...prev, '']);
    setStyles(prev => [...prev, {
      fontSize: 16,
      fontFamily: "Arial",
      color: "#000",
      direction: "ltr"
    }]);
    const newDisplay = {
      id: displayCounter
    };
    setDisplays(prev => [...prev, newDisplay]);
    setDisplayCounter(prev => prev + 1);
    setCurrentDisplay(newDisplay);
  }

  return (
    <div className="app-container">
      <button onClick={pushNewDisplay}>New Display</button>

      <div className="display-container">
        {displays.map((i) => (
          <Display
            key={i.id}
            text={texts[i.id] || ''}   
            style={styles[i.id] || { fontSize: 16, fontFamily: "Arial", color: "#000", direction: "ltr" }}
            setCurrentDisplay={() => setCurrentDisplay(i)}
          />
        ))}
      </div>


      <Editor
        text={texts[currentDisplay?.id] || ''}
        setText={setTexts}
        style={styles[currentDisplay?.id] || { fontSize: 16, fontFamily: "Arial", color: "#000", direction: "ltr" }}
        setStyle={setStyles}
        currentDisplay={currentDisplay}
      />
      <FilesButtons
        text={texts[currentDisplay?.id] || ''}
        setText={setTexts}
        style={styles[currentDisplay?.id] || { fontSize: 16, fontFamily: "Arial", color: "#000", direction: "ltr" }}
        setStyle={setStyles}
        currentDisplay={currentDisplay}
      />
    </div>
  )
}

export default App
