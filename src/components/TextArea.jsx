import { useRef } from "react"
import "./index.scss"
function TextArea() {
    // ref hook poora element utha ke le aata hai
    const textareaRef = useRef()
    const resizeTextarea = (event) => {
        console.log(textareaRef.current);
        textareaRef.current.style.height = '24px'
        textareaRef.current.style.height = textareaRef.current.scrollHeight + 12 + 'px'
    }
    return (
        <textarea ref={textareaRef} onInput={resizeTextarea}
            placeholder="Type something..." className="text-area"></textarea>
    )
}
export default TextArea