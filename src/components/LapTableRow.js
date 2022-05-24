import { minTwoDigits, calculateMinutesPart, calculateSecondsPart, calculateMilliSecondsPart } from "../utility/TimerUtility";

const LapTableRow = ({ index, lapTime, loggedTime }) => {

    return (
        <div className="lap-grid-row">
            <span>{minTwoDigits(index + 1)}</span>
            <span>{calculateMinutesPart(lapTime)}:{calculateSecondsPart(lapTime)}.{calculateMilliSecondsPart(lapTime)}</span>
            <span>{calculateMinutesPart(loggedTime)}:{calculateSecondsPart(loggedTime)}.{calculateMilliSecondsPart(loggedTime)}</span>
        </div>
    );
};

export default LapTableRow;