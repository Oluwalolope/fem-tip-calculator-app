const Button = ({tipPercentage, onUpdate, onUpdateActiveButton, changedValue, activeButton}) => {
    return (
        <>
            {tipPercentage == "custom" ? 
                <input type="number" placeholder="Custom" onChange={onUpdate} value={changedValue} min="0" step="0.01" required/> : 
                <button className={activeButton.buttonId == tipPercentage? 'active': null} onClick={(e) => {onUpdate('tipPercentage', tipPercentage); onUpdateActiveButton(tipPercentage)}}>{tipPercentage}%</button>
            }
        </>
    )
}

export default Button