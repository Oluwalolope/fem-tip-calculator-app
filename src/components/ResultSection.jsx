import DisplayResult from "./DisplayResult"

const ResultSection = ({tipResult, handleReset}) => {
    const {individualTip, totalTip} = tipResult
    return (
        <>
            <div className="resultSection">
                <div>
                <DisplayResult title="Tip Amount" amount={individualTip || 0} />
                <DisplayResult title="Total" amount={totalTip || 0} />
                </div>
                <button className="reset" onClick={handleReset}>Reset</button>
            </div>
        </>
    )
}
export default ResultSection