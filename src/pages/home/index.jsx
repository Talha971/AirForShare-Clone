import LOGO from "../../assets/logo.svg"
import "./css/style.scss"
import { MdTextFields } from "react-icons/md";
import { FaRegFileAlt } from "react-icons/fa";
import TEXT_GREY from "../../assets/text-gray.svg"
import TEXT_PRIMARY from "../../assets/text-primary.svg"
import FILES_GREY from "../../assets/files-gray.svg"
import FILES_PRIMARY from "../../assets/files-primary.svg"
function HomePage() {
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
                    <div className="active">
                        <MdTextFields size={40} />
                    </div>
                    <div>
                        <FaRegFileAlt size={35} />
                    </div>
                </div>
                <div className="card-conatiner"></div>
            </div>
        </div>
    )

}
export default HomePage