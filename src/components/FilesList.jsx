import { CiFileOn } from "react-icons/ci";
import { GoPlus } from "react-icons/go";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";

import DropZone from "./DropZone";
import "./index.scss"
function FilesList({ files, onDrop }) {


    return (
        <div className="files-list">
            {files.map((v, i) => {
                let icon;
                switch (v.type) {
                    case "text/html":
                        icon = <FaHtml5 />
                        break;
                    case "text/css":
                        icon = <FaCss3 />
                        break;
                    case "text/javascript":
                        icon = <IoLogoJavascript />
                        break;

                    default:
                        icon = <CiFileOn />
                        break;
                }
                return (
                    <div key={i}>
                        {v.type.indexOf("image") !== -1 ?
                            <img className="image-file" width={100} src={URL.createObjectURL(v)} alt="" />
                            :
                            <>
                                {icon}
                                < span className="file-name">
                                    {v.name.slice(0, 10)} <strong>{v.name.slice(v.name.lastIndexOf("."))}</strong>
                                </span>
                            </>
                        }
                    </div>
                )
            }
            )}
            <div >
                <DropZone onDrop={onDrop} textElement={
                    <span className="add-more-files">
                        <GoPlus />
                        <br />
                        <p>Add Files</p>
                        <span>(Upto 5 MB)</span>
                    </span>

                } />
            </div>
        </div >
    )
}
export default FilesList