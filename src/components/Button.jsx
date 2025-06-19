const Button = ({tipPercentage}) => {
    return (
        <>
            {tipPercentage == "custom" ? 
                <input type="number" placeholder="Custom" /> : 
                <button>{tipPercentage}%</button>
            }
        </>
    )
}

export default Button