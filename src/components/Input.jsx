const Input = ({label}) => {
    return (
        <div className="inputWrapper">
            {label && <label className="label" htmlFor={label}>{label}</label>}
            <input type="number" id={label} placeholder="0" className={label == "Bill" ? 'bill' : 'numberOfPeople'}/>          
        </div>
    )
}

export default Input;