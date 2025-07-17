const Input = ({label, onUpdate, changedValue}) => {
    return (
        <div className="inputWrapper">
            {label && <label className="label" htmlFor={label}>{label}</label>}
            <input type="number" id={label} placeholder='0' className={label == "Bill" ? 'bill' : 'numberOfPeople'} step={label == "Bill" ? '0.01' : '1'} min={label == "Bill" ? '0' : '1'}  onChange={onUpdate} value={changedValue} required />          
        </div>
    )
}

export default Input;