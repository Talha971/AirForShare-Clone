import { useEffect, useRef } from "react"
import "./index.scss"
function TextArea({ value, onChange }) {
    // ref hook poora element utha ke le aata hai
    const textareaRef = useRef()
    const resizeTextarea = (event) => {
        console.log(textareaRef.current);
        textareaRef.current.style.height = '24px'
        textareaRef.current.style.height = textareaRef.current.scrollHeight + 12 + 'px'
    }

    useEffect(() => {
        resizeTextarea()
    }, [value])

    return (
        <textarea value={value} ref={textareaRef} onChange={onChange} onInput={resizeTextarea}
            placeholder="Type something..." className="text-area"></textarea>
    )
}

export default TextArea