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


  return (
    <div className="app-container">
      <Display text={text} style={style} />
      <Editor text={text} setText={setText} style={style} setStyle={setStyle} />
      <FilesButtons text={text} setText={setText} style={style} setStyle={setStyle} />
    </div>
  )
};

export default App
