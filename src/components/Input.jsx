const Input = ({label}) => {
    return (
        <div className="inputWrapper">
            {label && <label className="label" htmlFor={label}>{label}</label>}
            <input type="number" id={label} placeholder="0" className={label == "Bill" ? 'bill' : 'numberOfPeople'} step={label == "Bill" ? '0.01' : '0'} min="0" />          
        </div>
    )
}

export default Input;