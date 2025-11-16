import React, { useState } from 'react'
import './App.css'
import Display from './jsx/display'
import Editor from './jsx/editor'
import FilesButtons from './jsx/filesButtons'
import SignButtons from './jsx/signButtons'

function App() {
  const [texts, setTexts] = useState([]);
  const [styles, setStyles] = useState([]);
  const [currentStyle, setCurrentStyle] = useState({
    color: "#000",
    size: 16
  });
  const [displays, setDisplays] = useState([]);
  const [displayCounter, setDisplayCounter] = useState(0);
  const [currentDisplay, setCurrentDisplay] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fileName, setFileName] = useState('');
  const [fileList, setFileList] = useState([]);

  function pushNewDisplay() {
    setTexts(prev => [...prev, []]);
    setStyles(prev => [...prev, {
      fontSize: 16,
      fontFamily: "Arial",
      color: "#000",
      direction: "ltr"
    }]);

    const newDisplay = {
      id: displayCounter,
      fileName: null,
      userName: currentUser
    };
    setDisplays(prev => [...prev, newDisplay]);
    setDisplayCounter(prev => prev + 1);
    setCurrentDisplay(newDisplay);
    // localStorage.setItem("currentDisplay", JSON.stringify(newDisplay));
  }

  function deleteDisplay(id) {
    setDisplays(prev => prev.filter(d => d.id !== id));
    if (currentDisplay?.id === id) setCurrentDisplay(undefined);
  }

  function updateDisplayFileName(displayId, fileName) {
    setDisplays(prev => prev.map(d => {
      if (d.id === displayId) return { ...d, fileName };
      return d;
    }));
    if (currentDisplay?.id === displayId) {
      setCurrentDisplay(prev => ({ ...prev, fileName }));
    }
  }

  return (
    <div className="app-container">
      <button onClick={pushNewDisplay}>New Display</button>

      <div className="display-container">
        {displays.map((d) => (
          <Display
            key={d.id}
            text={texts[d.id] || []}
            style={styles[d.id] || { fontSize: 16, fontFamily: "Arial", color: "#000", direction: "ltr" }}
            setCurrentDisplay={() => setCurrentDisplay(d)}
            deleteDisplay={() => deleteDisplay(d.id)}
            active={currentDisplay?.id === d.id}
            fileName={d.fileName}
            userName={currentUser}
          />
        ))}
      </div>


      <Editor
        text={texts[currentDisplay?.id] || []}
        setText={setTexts}
        style={styles[currentDisplay?.id] || { fontSize: 16, fontFamily: "Arial", color: "#000", direction: "ltr" }}
        setStyle={setStyles}
        currentDisplay={currentDisplay}
        currentStyle={currentStyle}        // ← שולחים לכאן
        setCurrentStyle={setCurrentStyle}  // ← שולחים גם את הפונקציה
      />

      <FilesButtons
        text={texts[currentDisplay?.id] || []}
        setText={setTexts}
        style={styles[currentDisplay?.id] || { fontSize: 16, fontFamily: "Arial", color: "#000", direction: "ltr" }}
        setStyle={setStyles}
        currentDisplay={currentDisplay}
        setDisplays={setDisplays}
        displays={displays}
        displayCounter={displayCounter}
        setDisplayCounter={setDisplayCounter}
        setCurrentDisplay={setCurrentDisplay}
        updateDisplayFileName={updateDisplayFileName}
        isLoggedIn={isLoggedIn}
        userName={currentUser}
        fileName={fileName}
        setFileName={setFileName}
        fileList={fileList}
        setFileList={setFileList}
      />

      <SignButtons
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        username={username}
        setUsername={setUsername}
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
        password={password}
        setPassword={setPassword}
        setDisplays={setDisplays}
        setCurrentDisplay={setCurrentDisplay}
        setFileList={setFileList}
      />

    </div>
  )
}

export default App
