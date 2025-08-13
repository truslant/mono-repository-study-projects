import { useRef, useState, useEffect } from "react"
import ResultModal from "./ResultModal";

const TimerChallange = ({ title, targetTime }) => {

    const timer = useRef();
    const dialogOpener = useRef();

    const [remainingTime, setRemainingTime] = useState(targetTime * 1000)

    const timerIsActive = remainingTime > 0 && remainingTime < targetTime * 1000

    if (remainingTime <= 0) {
        clearInterval(timer.current)
        dialogOpener.current.openDialog()
    }

    const handleStartClick = () => {
        timer.current = setInterval(() => {
            setRemainingTime(prevTimeRemaining => prevTimeRemaining - 10);
        }, 10)
    }

    const handleStopClick = () => {
        dialogOpener.current.openDialog()
        clearInterval(timer.current)
    }

    const handleReset = () => {
        setRemainingTime(targetTime * 1000)
    }

    return (
        <>
            <ResultModal
                reference={dialogOpener}
                targetTime={targetTime}
                remainingTime={remainingTime}
                handleReset={handleReset}
            />
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 && 's'}
                </p>
                <p>
                    <button onClick={timerIsActive ? handleStopClick : handleStartClick}>
                        {timerIsActive ? 'Stop' : 'Start'} Challange
                    </button>
                </p>
                <p className={timerIsActive ? 'active' : undefined}>
                    {timerIsActive ? "Time is running..." : "Timer inactive"}
                </p>
            </section>
        </>
    )
}

export default TimerChallange