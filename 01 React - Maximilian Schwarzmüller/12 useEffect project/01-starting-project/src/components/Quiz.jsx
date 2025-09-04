import { useState, useCallback, useRef } from "react"


import QUESTIONS from '../questions.js'
import Summary from "./Summary.jsx"

import Question from "./Question.jsx"

const TIMER = 5000

const Quiz = () => {

    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length
    const quizIsComplete = QUESTIONS.length === activeQuestionIndex

    const handleSelectAnswer = useCallback(function handleSelectAnswer(answer) {

        setUserAnswers(prevState => [...prevState, answer])

    }, [])

    if (quizIsComplete) {
        return (
            <Summary userAnswers={userAnswers} />
        )
    } else {
        return (
            <div id="quiz">
                <Question
                    key={activeQuestionIndex}
                    index={activeQuestionIndex}
                    onSelectAnswer={handleSelectAnswer}
                    handleSelectAnswer={handleSelectAnswer}
                    timer={TIMER}
                />
            </div>
        )
    }
}

export default Quiz