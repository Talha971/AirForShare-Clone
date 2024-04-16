import LOGO from "../../assets/logo.svg"
import "./css/style.scss"
import { MdTextFields } from "react-icons/md";
import { FaRegFileAlt } from "react-icons/fa";
import TEXT_GREY from "../../assets/text-gray.svg"
import TEXT_PRIMARY from "../../assets/text-primary.svg"
import FILES_GREY from "../../assets/files-gray.svg"
import FILES_PRIMARY from "../../assets/files-primary.svg"
import { useEffect, useState } from "react";
import ThemeButton from "../../components/Button.jsx";
import TextArea from "../../components/TextArea";
import DropZone from "../../components/DropZone.jsx";
import FilesList from "../../components/FilesList.jsx";
import { FaDownload } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { db, ref, set, onValue, remove } from "../../db/index.js";




function HomePage() {
    const [type, setType] = useState("text")
    const [textValue, setTextValue] = useState('')
    const [isText, setIsText] = useState(false)
    const [files, setFiles] = useState([])

    // ondrop
    const onDrop = acceptedFiles => {
        // Do something with the files
        console.log("accept files---->>>>>>", acceptedFiles);
        setFiles([...files, ...acceptedFiles])
    }

    const saveChanges = () => {
        // console.log("textValue------>>>", textValue);
        set(ref(db, 'sharing'), {
            text: textValue
        });
    }

    const clearText = async () => {
        await remove(ref(db, 'sharing'))
        setTextValue("")
        setIsText(false)
    }

    useEffect(() => {
        const starCountRef = ref(db, 'sharing');
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            setTextValue(data.text)
            if (data.text) {
                setIsText(true)
            }
        });
    }, [])

    var expression =
        /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
    var regex = new RegExp(expression);
    const links = textValue.match(regex) || [];



    return (
        <div className="container">
            <div className="header-bar">
                <div className="logo">
                    <img src={LOGO} alt="" />
                </div>
                <div className="menu-bar">
                    <ul>
                        <li>How it works </li>
                        <li>Download  </li>
                        <li>Upgrade  </li>
                        <li>Feedback  </li>
                        <li className="menu-btn">Login / Register  </li>
                    </ul>
                </div>
            </div>
            <div className="main-card">
                <div className="card-sidebar">
                    <div onClick={() => setType("text")} >
                        <img src={type === "text" ? TEXT_PRIMARY : TEXT_GREY} alt="" />
                    </div>
                    <div onClick={() => setType("files")} >
                        <img src={type === "files" ? FILES_PRIMARY : FILES_GREY} alt="" />

                    </div>
                </div>
                <div className="card-container">
                    {
                        type === "text" ?
                            <div className="text-section">
                                <h1>Text</h1>
                                <div className="resize-section">
                                    <TextArea value={textValue} onChange=
                                        {(e) => {
                                            setTextValue(e.target.value)
                                            setIsText(false)
                                        }} />
                                </div>
                                <div className="text-footer">
                                    <div className="links">
                                        {links.map((v, i) => (
                                            <div key={i}>
                                                <span>
                                                    <a href={v} target="_blank" rel="noopener noreferrer">
                                                        {v}</a>
                                                </span>
                                            </div>
                                        ))
                                        }
                                    </div>
                                    <div className="save-btn-section">
                                        <span onClick={clearText}>Clear</span>
                                        {isText ?
                                            <ThemeButton onClick={() => {
                                                navigator.clipboard.writeText(textValue)
                                            }} title={"Copy"} />
                                            :
                                            <ThemeButton onClick={saveChanges} disabled=
                                                {textValue ? false : true}
                                                title={'Save'}></ThemeButton>
                                        }
                                    </div>
                                </div>
                            </div>
                            :
                            <div className="files-section">
                                <div className="files-header">
                                    <h1>Files</h1>
                                    <div className="files-btn">
                                        <div className="download-btn">
                                            <FaDownload />
                                            Download All
                                        </div>
                                        <div onClick={() => setFiles([])} className="delete-btn">
                                            <MdDelete />
                                            Delete All
                                        </div>
                                    </div>
                                </div>

                                {files.length ?
                                    < FilesList files={files} onDrop={onDrop} />
                                    :
                                    <DropZone
                                        onDrop={onDrop}
                                        textElement={
                                            <>
                                                Drag and drop any files up to 2 files, 5Mbs each or <span> Browse Upgrade </span> to get more space
                                            </>
                                        } />
                                }

                            </div>
                    }
                </div>
            </div>
        </div >
    )

}

export default HomePage