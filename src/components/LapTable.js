import LapTableRow from "./LapTableRow";

const LapTable = ({ history }) => {

    return (
        <>
            {history.length ?
                <div className="lap-grid-container">
                    <div className="lap-grid-row">
                        <span>Lap</span>
                        <span>Lap times</span>
                        <span>Overall time</span>
                    </div>
                    {history.map((loggedTime, index, orgHistoryArr) => {
                        const lapTime = index === 0 ? orgHistoryArr[index] : orgHistoryArr[index] - orgHistoryArr[index - 1];
                        return (
                            <LapTableRow key={loggedTime.toString()}
                                loggedTime={loggedTime}
                                index={index}
                                lapTime={lapTime} />
                        )
                    })}
                </div>
                : null
            }
        </>
    );
};

export default LapTable;