import React, { useState } from 'react';
import '../style/editor.css'
import TextButton from './buttons/textButtons'
import FontButton from './buttons/fontButtons'
import ColorButton from './buttons/colorButtons'
import ChangeLangButton from './buttons/changeLangButtons'
import DeleteButton from './buttons/deleteButtons'
import UndoButton from './buttons/undoButtons'
import SizeButtons from './buttons/sizeButtons'
import SearchButtons from './buttons/searchButtons'
import ChangeButtons from './buttons/changeButtons'





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
        ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
        ['😀', '😁', '😂', '🤣', '😃', '😄', '😅', '😆', '😉', '😊'],
        ['😎', '😍', '😘', '🥰', '😗', '😙', '😚', '🙂', '🤗'],
        ['🤩', '🤔', '🤨', '😐', '😑', '😶', '🙄', '😏'],
        [' ']
    ];

    const layouts = [englishLayout, hebrewLayout, emojiLayout];
    const [layoutIndex, setLayoutIndex] = useState(0);

    const changeLayout = () => {
        setLayoutIndex((prev) => (prev + 1) % layouts.length);
    };

    const [history, setHistory] = useState([]);

    const handleChange = () => {
        setHistory((prev) => [...prev, { text, style }]);
    };

    return (
        <div className="keyboard-container">
            
            {layouts[layoutIndex].map((row, rowIndex) => (
                <div className="keyboard-row" key={rowIndex}>
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
            <div className="keyboard-controls">
                <ChangeLangButton changeLayout={changeLayout} />
                <DeleteButton text={text} setText={setText} handleChange={handleChange} />
                <UndoButton history={history} setHistory={setHistory} setText={setText} setStyle={setStyle} />

            </div>
            <div className="keyboard-style">
                {layoutIndex < 2 && (
                    <FontButton style={style} setStyle={setStyle} historyChange={handleChange} />
                )}
                {layoutIndex < 2 && (
                    <ColorButton style={style} setStyle={setStyle} historyChange={handleChange} />
                )}
                <SizeButtons style={style} setStyle={setStyle} historyChange={handleChange} />
            </div>
            <div className='charControl'>
                <SearchButtons text={text} />
                <ChangeButtons text={text} setText={setText} historyChange={handleChange} />
            </div>
        </div>
    );
};

export default Editor;