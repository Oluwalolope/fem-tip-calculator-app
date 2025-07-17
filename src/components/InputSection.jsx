import Button from "./Button"
import Input from "./Input"

const InputSection = ({inputData, updateInputData, activeButton, updateActiveButton}) => {
    return (
        <>
            <div className="inputSection">
                <Input label="Bill" changedValue={inputData.bill}
            onUpdate={(e) => updateInputData('bill', e.target.value)}/>
                <div>
                    <p className="label">Select Tip %</p>
                    <menu>
                        <Button tipPercentage={5} onUpdate={updateInputData} onUpdateActiveButton={updateActiveButton} activeButton ={activeButton}/>
                        <Button tipPercentage={10} onUpdate={updateInputData} onUpdateActiveButton={updateActiveButton} activeButton ={activeButton}/>
                        <Button tipPercentage={15} onUpdate={updateInputData} onUpdateActiveButton={updateActiveButton} activeButton ={activeButton}/>
                        <Button tipPercentage={25} onUpdate={updateInputData} onUpdateActiveButton={updateActiveButton} activeButton ={activeButton}/>
                        <Button tipPercentage={50} onUpdate={updateInputData} onUpdateActiveButton={updateActiveButton} activeButton ={activeButton}/>
                        <Button tipPercentage="custom" changedValue={inputData.tipPercentage} onUpdate={(e) => updateInputData('tipPercentage', e.target.value)} />
                    </menu>
                </div>
                <Input label="Number of people" changedValue={inputData.numberOfPeopleTipping}
            onUpdate={(e) => updateInputData('numberOfPeopleTipping', e.target.value)}/>
            </div>
        </>
    )
}

export default InputSection