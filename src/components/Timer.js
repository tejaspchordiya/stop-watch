import { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import { calculateMinutesPart, calculateSecondsPart, calculateMilliSecondsPart } from "../utility/TimerUtility";
import Phase from "../enum/Phase";

const Timer = forwardRef((props, _ref) => {
    const { phase } = props;
    const [milliSeconds, setMilliSeconds] = useState(0);

    useEffect(() => {
        let msCounter = null;

        /**
         * We have arrived at 83 by following logic:
         * - 1000ms / 60fps = 16.67 ms for each frame
         * - Passing 17 to setInterval api seems to be logical, but screen refresh is so fast
         * that user is unable to read the number, hence, increasing interval to equivalent of 5 frames
         */
        if (phase === Phase.FIRST) {
            msCounter = setInterval(() => {
                setMilliSeconds(prevMs => prevMs + 83);
            }, 83);
        } else if (phase === Phase.ZERO) {
            setMilliSeconds(0);
            clearInterval(msCounter);
        }
        else {
            clearInterval(msCounter);
        }

        return () => clearInterval(msCounter);
    }, [phase]);

    useImperativeHandle(_ref, () => ({
        getMilliSeconds: () => milliSeconds,
        resetMilliseconds: () => setMilliSeconds(0)
    }));

    return (
        <div className="timer-container">
            <h1>
                {calculateMinutesPart(milliSeconds)} : {calculateSecondsPart(milliSeconds)} . {calculateMilliSecondsPart(milliSeconds)}
            </h1>
        </div>
    );
});

export default Timer;