const DisplayResult = ({title, amount}) => {
    return (
        <div className="displayResult">
            <div>
                <p className="fieldTitle">{title}</p>
                <p className="fieldSubtitle">/person</p>
            </div>
            <p className="tipAmount">${amount}</p>
        </div>        
    )
}
export default DisplayResult