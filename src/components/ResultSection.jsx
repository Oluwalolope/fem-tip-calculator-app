import DisplayResult from "./DisplayResult"

const ResultSection = () => {
    return (
        <>
            <div className="resultSection">
                <div>
                <DisplayResult title="Tip Amount" amount="4.27" />
                <DisplayResult title="Total" amount="32.79" />
                </div>
                <button className="reset">Reset</button>
            </div>
        </>
    )
}
export default ResultSection