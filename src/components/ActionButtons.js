import Button from '@mui/material/Button';
import Phase from '../enum/Phase';

const ActionButtons = ({ phase, setPhase, updateHistory, resetHistory }) => {
    const onStartClick = () => {
        setPhase(Phase.FIRST);
    }

    const onLapClick = () => {
        updateHistory();
    }

    const onStopClick = () => {
        setPhase(Phase.SECOND);
    }

    const onResumeClick = () => {
        setPhase(Phase.FIRST);
    }

    const onResetClick = () => {
        setPhase(Phase.ZERO);
        resetHistory();
    }

    return (
        <div className="action-buttons-container">
            {phase === Phase.ZERO && (
                <Button variant="contained" onClick={onStartClick}>Start</Button>
            )}
            {phase === Phase.FIRST && (
                <>
                    <Button variant="outlined" onClick={onLapClick}>Lap</Button>
                    <Button variant="contained" color="error" onClick={onStopClick}>Stop</Button>
                </>
            )}
            {phase === Phase.SECOND && (
                <>
                    <Button variant="outlined" onClick={onResetClick}>Reset</Button>
                    <Button variant="contained" onClick={onResumeClick}>Resume</Button>
                </>
            )}
        </div>
    );
};

export default ActionButtons;
