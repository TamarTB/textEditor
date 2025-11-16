import React, { useState, useEffect } from "react";
import '../style/files.css';
import SaveAs from './files/save_as';
import Save from './files/save';
import Open from './files/open';


function FilesButtons({ text, style, setText, setStyle, displays, setDisplays, displayCounter, setDisplayCounter, setCurrentDisplay, updateDisplayFileName, currentDisplay, isLoggedIn, userName, fileList, setFileList, fileName, setFileName }) {

    useEffect(() => {
        if (!userName) return; // אם אף משתמש לא מחובר, לא נטען כלום

        const userFiles = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);

            // מתעלמים ממפתחות מערכת
            if (key === "users") continue;

            try {
                const item = JSON.parse(localStorage.getItem(key));

                // אם זה קובץ ששייך למשתמש הנוכחי
                if (item?.userName === userName) {
                    userFiles.push(key);
                }
            } catch (e) {
                continue;
            }
        }

        setFileList(userFiles);
    }, [userName]);



    return (
        <div className="files">
            <SaveAs
                text={text}
                style={style}
                fileName={fileName}
                setFileName={setFileName}
                setFileList={setFileList}
                currentDisplay={currentDisplay}
                updateDisplayFileName={updateDisplayFileName}
                isLoggedIn={isLoggedIn}
                userName={userName}
            />
            <Save
                text={text}
                style={style}
                currentDisplay={currentDisplay}
                isLoggedIn={isLoggedIn}
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
                isLoggedIn={isLoggedIn}
            />
        </div>
    )
}

export default FilesButtons;
