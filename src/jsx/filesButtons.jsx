import React, { useState } from "react";
import SaveAs from './files/save_as';
import Save from './files/save';
import Open from './files/open';



function FilesButtons({ text, style, setText, setStyle }) {
    const [fileName, setFileName] = useState('');

    return (
        <>
            <div className="files">
                <SaveAs text={text} style={style} fileName={fileName} setFileName={setFileName} />
                <Save text={text} style={style} fileName={fileName} />
                <Open setText={setText} setStyle={setStyle} fileName={fileName} setFileName={setFileName}/>
            </div>
        </>
    )
}
export default FilesButtons