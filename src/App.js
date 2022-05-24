import { useRef, useState } from "react";
import './App.css';
import ActionButtons from './components/ActionButtons';
import Header from './components/Header';
import LapTable from './components/LapTable';
import Timer from './components/Timer';
import Phase from "./enum/Phase";

const App = () => {
  const timerRef = useRef();
  const [phase, setPhase] = useState(Phase.ZERO);
  const [history, setHistory] = useState([]);

  const updateHistory = () => {
    setHistory(prevHistory => [...prevHistory, timerRef.current.getMilliSeconds()]);
  }

  const resetHistory = () => {
    setHistory([]);
  }

  return (
    <>
      <Header />

      <Timer ref={timerRef}
        phase={phase} />

      <ActionButtons
        phase={phase}
        setPhase={setPhase}
        updateHistory={updateHistory}
        resetHistory={resetHistory} />

      <LapTable history={history} />
    </>
  );
}

export default App;