const Button = ({tipPercentage}) => {
    return (
        <>
            {tipPercentage == "custom" ? 
                <input type="text" placeholder="Custom" /> : 
                <button>{tipPercentage}%</button>
            }
        </>
    )
}

export default Button