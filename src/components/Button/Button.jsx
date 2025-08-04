import "./styles.css"

function Button({buttonName = "Send", onClick = () =>{}}, children){
    return (
    <button className = "button_homework_03" onClick={onClick}>
        {/* {children ? "" : buttonName} */}
        {!children && buttonName}
        {children}
    
    
    </button>

    );
}

export default Button;
