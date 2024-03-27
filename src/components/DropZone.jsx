import { useDropzone } from 'react-dropzone'
import "./index.scss"
function DropZone() {
    const onDrop = acceptedFiles => {
        // Do something with the files
        console.log("accept files---->>>>>>", acceptedFiles);
    }
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })


    return (
        <div className="drop-zone" {...getRootProps()}>
            <input {...getInputProps()} />
            {
                <div>
                    Drag and drop any files up to 2 files, 5Mbs each or <span> Browse Upgrade </span> to get more space
                </div>
            }
        </div>
    )
}
export default DropZone