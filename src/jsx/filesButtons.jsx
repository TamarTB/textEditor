import React, { useState, useEffect } from "react";
import SaveAs from './files/save_as';
import Save from './files/save';
import Open from './files/open';

function FilesButtons({ text, style, setText, setStyle, displays, setDisplays, displayCounter, setDisplayCounter, setCurrentDisplay }) {
    const [fileName, setFileName] = useState('');
    const [fileList, setFileList] = useState([]);

    // טוען את כל הקבצים מה-localStorage בעת mount
    useEffect(() => {
        const files = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key !== "currentFile") files.push(key);
        }
        setFileList(files);
    }, []);

    return (
        <div className="files">
            <SaveAs 
                text={text} 
                style={style} 
                fileName={fileName} 
                setFileName={setFileName} 
                setFileList={setFileList}  // ← מעבירים את setFileList
            />
            <Save 
                text={text} 
                style={style} 
                fileName={fileName} 
            />
            <Open 
                texts={text}
                setText={setText} 
                styles={style}
                setStyle={setStyle} 
                fileList={fileList}  // ← משתמשים ב-fileList משותף
                setFileList={setFileList} // ← כדי לעדכן
                displays={displays}
                setDisplays={setDisplays}
                displayCounter={displayCounter}
                setDisplayCounter={setDisplayCounter}
                setCurrentDisplay={setCurrentDisplay}
            />
        </div>
    )
}

export default FilesButtons;
