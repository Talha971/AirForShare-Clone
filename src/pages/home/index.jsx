import LOGO from "../../assets/logo.svg"
import "./css/style.scss"
import { MdTextFields } from "react-icons/md";
import { FaRegFileAlt } from "react-icons/fa";
import TEXT_GREY from "../../assets/text-gray.svg"
import TEXT_PRIMARY from "../../assets/text-primary.svg"
import FILES_GREY from "../../assets/files-gray.svg"
import FILES_PRIMARY from "../../assets/files-primary.svg"
import { useState } from "react";
import ThemeButton from "../../components/Button.jsx";
import TextArea from "../../components/TextArea";

function HomePage() {
    const [type, setType] = useState("text")

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
                                    <TextArea className="text-area" />
                                </div>
                                <div>
                                    <ThemeButton disabled={true} title={'save'}></ThemeButton>
                                </div>
                            </div>
                            :
                            <div className="files-section">
                                <h1>Files</h1>
                            </div>
                    }
                </div>
            </div>
        </div>
    )

}
export default HomePage