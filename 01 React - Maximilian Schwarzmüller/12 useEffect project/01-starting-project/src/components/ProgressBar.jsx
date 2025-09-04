import { useEffect, useState } from "react"

const ProgressBar = ({ timer, handleSelectAnswer, mode }) => {

    const [remainingTime, setRemainingTime] = useState(timer)

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (handleSelectAnswer) {
                handleSelectAnswer('')
            }
        }, timer)
        return () => {
            clearTimeout(timeout)
        }
    }, [timer, handleSelectAnswer])

    useEffect(() => {
        console.log('interval triggered')
        console.log('timer value:', timer)
        const countDownTimer = setInterval(() => {
            setRemainingTime(prevTime => prevTime - 10)
        }, 10)
        return () => {
            clearInterval(countDownTimer)
        }
    }, [])

    return (
        <progress value={remainingTime} max={timer} className={mode} />
    )
}

export default ProgressBar