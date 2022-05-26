import LapTableRow from "./LapTableRow";

const LapTable = ({ history }) => {

    function addLapRows() {
        const lapRows = [];
        for (let index = history.length - 1; index >= 0; index--) {
            const loggedTime = history[index];
            const lapTime = index === 0 ? loggedTime : loggedTime - history[index - 1];
            lapRows.push(
                <LapTableRow key={index.toString()}
                    loggedTime={loggedTime}
                    index={index}
                    lapTime={lapTime} />
            )
        }
        return lapRows;
    }

    return (
        <>
            {history.length ?
                <div className="lap-grid-container">
                    <div className="lap-grid-row">
                        <span>Lap</span>
                        <span>Lap times</span>
                        <span>Overall time</span>
                    </div>
                    {addLapRows()}
                </div>
                : null
            }
        </>
    );
};

export default LapTable;