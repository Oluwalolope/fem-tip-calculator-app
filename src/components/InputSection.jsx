import Button from "./Button"
import Input from "./Input"

const InputSection = () => {
    return (
        <>
            <div className="inputSection">
                <Input label="Bill" />
                <div>
                    <p className="label">Select Tip %</p>
                    <menu>
                        <Button tipPercentage={5}/>
                        <Button tipPercentage={10}/>
                        <Button tipPercentage={15}/>
                        <Button tipPercentage={25}/>
                        <Button tipPercentage={50}/>
                        <Button tipPercentage="custom"/>
                    </menu>
                </div>
                <Input label="Number of people" />
            </div>
        </>
    )
}

export default InputSection