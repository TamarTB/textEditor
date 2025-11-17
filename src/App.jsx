import React, { useState } from 'react'
import './App.css'
import Display from './jsx/display'
import Editor from './jsx/editor'
import FilesButtons from './jsx/filesButtons'
import SignButtons from './jsx/signButtons'

function App() {
  const [texts, setTexts] = useState([]);//מערך של טקסטים בשביל שלכל דיספליי יהיה טקסט
  const [styles, setStyles] = useState([]);//מערך של סטיילים בשביל שלכל דיספליי יהיה סטייל
  const [currentStyle, setCurrentStyle] = useState({
    color: "#000",
    size: 16
  });//שמירת הסטייל הנוכחי בשביל כפתור עיצוב
  const [displays, setDisplays] = useState([]);//מערך של דיספליי
  const [displayCounter, setDisplayCounter] = useState(0);//בשביל מזהה לכל דיספליי
  const [currentDisplay, setCurrentDisplay] = useState();//הדיספליי הנוכחי
  const [isLoggedIn, setIsLoggedIn] = useState(false);//האם המשתמש מחובר
  const [currentUser, setCurrentUser] = useState('');//משתמש נוכחי
  const [username, setUsername] = useState('');//שם משתמש
  const [password, setPassword] = useState('');//סיסמת משתמש
  const [fileName, setFileName] = useState('');//שם קובץ
  const [fileList, setFileList] = useState([]);//רשימת שמות קבצים

  //יצירת דיספליי חדש
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
  }

  //מחיקת דיספליי מהתצוגה
  function deleteDisplay(id) {
    setDisplays(prev => prev.filter(d => d.id !== id));
    if (currentDisplay?.id === id) setCurrentDisplay(undefined);
  }

  //עדכון שם הקובץ של דיספליי פתוח לאחר השמירה בשם
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
            active={currentDisplay?.id === d.id}//בשביל מסגרת עבור דיספליי נוכחי
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
        currentStyle={currentStyle}      
        setCurrentStyle={setCurrentStyle}
      />

      <FilesButtons
        text={texts[currentDisplay?.id] || []}
        setText={setTexts}
        style={styles[currentDisplay?.id] || { fontSize: 16, fontFamily: "Arial", color: "#000", direction: "ltr" }}
        setStyle={setStyles}
        currentDisplay={currentDisplay}
        setCurrentDisplay={setCurrentDisplay}
        displays={displays}
        setDisplays={setDisplays}
        displayCounter={displayCounter}
        setDisplayCounter={setDisplayCounter}
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
