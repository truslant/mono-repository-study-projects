import { useState, useEffect } from "react"

const ProgressBar = ({ timer }) => {
    const [countDown, setCountDown] = useState(timer)

    useEffect(() => {
        const countDownInterval = setInterval(() => {
            setCountDown(lastCountDown => lastCountDown - 10)
        }, 10)
        return () => { clearInterval(countDownInterval) }

    }, [])
    return (
        <progress value={countDown} max={timer} />
    )
}

export default ProgressBar