import { useEffect, useState } from "react";

const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
}

const defaultBreak = 5
const defaultSession = 25

function App() {
  const [breakLength, setBreakLength] = useState(defaultBreak);
  const [sessionLength, setSessionLength] = useState(defaultSession);
  const [timeLeft, setTimeLeft] = useState(sessionLength * 60);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let timer;

    const handleStart = () => {
      timer = setInterval(() => {
        setTimeLeft((prevTimeLeft) => {
          if (prevTimeLeft === 0) {
            clearInterval(timer);
            return 0;
          }
          return prevTimeLeft - 1;
        });
      }, 1000);
    };

    if (!isPaused) {
      handleStart();
    } else {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isPaused]);

  const handlePause = () => {
    setIsPaused((prevIsPaused) => !prevIsPaused);
  };

  const handleReset = () => {
    setTimeLeft(sessionLength * 60);
    setIsPaused(false);
  }



  return (
    <div className="container">
      <h1>25 + 5 ⏱️ Timer App</h1>

      <div className="controls">
        <div className="break-container">
          <p id="break-label">Break Length</p>

          <div className="break-controls">
            <span id="break-decrement" onClick={() => setBreakLength(curr => {
              if (curr === 1) return 1;
              return curr - 1
            })}>⬇️</span>
            <p id="break-length">{breakLength}</p>
            <span id="break-increment" onClick={() => setBreakLength(curr => {
              if (curr === 60) return 60;
              return curr + 1
            })}>⬆️</span>
          </div>
        </div>

        <div className="session-container">
          <p id="session-label">Session Length</p>

          <div className="session-controls">
            <span id="session-decrement" onClick={() => setSessionLength(curr => {
              if (curr === 1) return 1;
              return curr - 1
            })}>⬇️</span>
            <p id="session-length">{sessionLength}</p>
            <span id="session-increment" onClick={() => setSessionLength(curr => {
              if (curr === 60) return 60;
              return curr + 1
            })}>⬆️</span>
          </div>
        </div>
      </div>

      <div className="timer-container">
        <p id="timer-label" style={{ color: timeLeft === 0 && "red" }}>{timeLeft === 0 ? "Time out" : "Session"}</p>
        <p id="time-left" style={{ color: timeLeft === 0 && "red" }}>{formatTime(timeLeft)}</p>

        <div className="display">
          <span id="start_stop" onClick={handlePause}>⏯️</span>
          <span id="reset" onClick={handleReset}>🔁️</span>
        </div>
      </div>
    </div>
  )
}

export default App
