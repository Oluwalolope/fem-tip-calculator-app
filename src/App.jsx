import { useState } from "react";
import InputSection from "./components/InputSection"
import ResultSection from "./components/ResultSection"
import { calculateTip } from "./util/tip";


const App = () => {
  const [activeButton, setActiveButton] = useState({buttonId: ''});
    
  const [tipData, setTipData] = useState({
    bill: '',
    tipPercentage: '',
    numberOfPeopleTipping: ''
  });

  const handleChange = (identifier, value, buttonId) => {
    setTipData((prevTipData) => {
      return {
        ...prevTipData,
        [identifier]: value,
      };
    });
  };

  const handleChangeActiveButton = (buttonId) => {
    setActiveButton(() => {
      return {buttonId};
    });
  };

  const handleReset = () => {
    setTipData(() => {
      return {
        bill: '',
        tipPercentage: '',
        numberOfPeopleTipping: ''
      };
    });
    setActiveButton({buttonId:''});
  };

  const [data] = calculateTip(tipData);
  return (
    <>
      <div className="container">
        <InputSection inputData={tipData} updateInputData={handleChange} updateActiveButton={handleChangeActiveButton} activeButton={activeButton} />
        <ResultSection tipResult={data} handleReset={handleReset}/>
      </div>
    </>
  )
}

export default App
