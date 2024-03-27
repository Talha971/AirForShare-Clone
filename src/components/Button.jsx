function ThemeButton({ disabled, title, onClick }) {
    return (
        <button className="theme-btn" style={{ borderColor: disabled && "#a1a3a1" }}
            disabled={disabled}
            onClick={onClick}>{title}</button>
    )
}
export default ThemeButton