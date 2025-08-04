import "./styles.css"

function Input({name, type, placeholder, label}){
    return(
        <Input className="input_component" name={name} type={type} placeholder={placeholder} label={label} />
        
    );
}

export default Input;