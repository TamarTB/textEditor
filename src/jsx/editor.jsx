import React, { useState } from 'react';
import '../style/editor.css';
import '../style/files.css';
import TextButton from './buttons/textButtons';
import FontButton from './buttons/fontButtons';
import ColorButton from './buttons/colorButtons';
import ChangeLangButton from './buttons/changeLangButtons';
import DeleteButton from './buttons/deleteButtons';
import UndoButton from './buttons/undoButtons';
import SizeButtons from './buttons/sizeButtons';
import SearchButtons from './buttons/searchButtons';
import ChangeButtons from './buttons/changeButtons';

function Editor({ text, setText, style, setStyle }) {
    const englishLayout = [
        ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
        ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
        ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
        ['!', '?', ',', '.', ' ', '@', '(', ')', ':']
    ];

    const hebrewLayout = [
        ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
        ['ק', 'ר', 'א', 'ט', 'ו', 'ן', 'מ', 'פ', 'ש', 'ד'],
        ['ס', 'ג', 'כ', 'ע', 'י', 'ח', 'ל', 'ך', 'ף'],
        ['ז', 'ס', 'ב', 'ה', 'נ', 'מ', 'צ', 'ת'],
        ['!', '?', ',', '.', ' ', '@', '(', ')', ':']
    ];

    const emojiLayout = [
        ['😀', '😁', '😂', '😃', '😄', '😅', '😆', '😉', '😊'],
        ['😎', '😍', '😘', '🥰', '😗', '😙', '😚', '🙂', '🤗'],
        ['🤩', '🤔', '🤨', '😐', '😑', '😶', '🙄', '😏'],
        [' ']
    ];

    const layouts = [englishLayout, hebrewLayout, emojiLayout];
    const [layoutIndex, setLayoutIndex] = useState(0);
    const [history, setHistory] = useState([]);

    const changeLayout = () => setLayoutIndex((prev) => (prev + 1) % layouts.length);
    const handleChange = () => setHistory((prev) => [...prev, { text, style }]);

    return (
        <div className="page-container">

            <div className="keyboard-layout">
                {/* צד שמאל - פעולות */}
                <div className="keyboard-box left-box">
                    <h4>⚙️ פעולות</h4>

                    {/* שורה ראשונה - שינוי שפות + Undo */}
                    <div className="buttons-row">
                        <ChangeLangButton changeLayout={changeLayout} />
                        <UndoButton history={history} setHistory={setHistory} setText={setText} setStyle={setStyle} />
                    </div>

                    {/* שורה שנייה - Delete */}
                    <div className="buttons-row">
                        <DeleteButton text={text} setText={setText} handleChange={handleChange} />
                    </div>

                    {/* שורה שלישית - ChangeButtons */}
                    <div className="buttons-row">
                        <ChangeButtons text={text} setText={setText} historyChange={handleChange} />
                    </div>

                    {/* שורה אחרונה - תיבת חיפוש */}
                    <div className="inline-control">
                        <SearchButtons text={text} />
                    </div>
                </div>


                {/* מרכז - מקלדת */}
                <div className="keyboard-box center-box">
                    {layouts[layoutIndex].map((row, i) => (
                        <div className="keyboard-row" key={i}>
                            {row.map((letter) => (
                                <TextButton
                                    key={letter === ' ' ? 'space' : letter}
                                    value={letter}
                                    setText={setText}
                                    className={letter === ' ' ? 'space' : ''}
                                    handleChange={handleChange}
                                />
                            ))}
                        </div>
                    ))}
                </div>

                {/* צד ימין - עיצוב */}
                <div className="keyboard-box right-box">
                    <h4>🎨 עיצוב</h4>

                    {/* שורה ראשונה */}
                    <div className="buttons-grid">
                        {layoutIndex < 2 && (
                            <>
                                <FontButton style={style} setStyle={setStyle} historyChange={handleChange} />
                                <ColorButton style={style} setStyle={setStyle} historyChange={handleChange} />
                            </>
                        )}
                    </div>

                    {/* שורה שנייה */}
                    <div className="buttons-grid size-buttons-row">
                        <SizeButtons style={style} setStyle={setStyle} historyChange={handleChange} />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Editor;
