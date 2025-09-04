import { useRef } from "react"

const Answers = ({ answers, selectedAnswer, answerState, onSelect }) => {
    
    const shuffledAnswers = useRef()
    
    const shuffleAnswers = () => {
        const shuffledAsnwers = [...answers]
        const arrayLength = answers.length
        for (let i = 0; i < 100; i++) {
            const indexA = Math.floor(Math.random() * arrayLength)
            const indexB = Math.floor(Math.random() * arrayLength)
            const intermediary = shuffledAsnwers[indexA]
            shuffledAsnwers[indexA] = shuffledAsnwers[indexB]
            shuffledAsnwers[indexB] = intermediary
        }
        return shuffledAsnwers
    }

    if (!shuffledAnswers.current) {
        shuffledAnswers.current = shuffleAnswers()
    }
    
    return (
        <ul id="answers">
            {shuffledAnswers.current.map((answer) => {

                const isSelected = selectedAnswer === answer;

                let cssClass = '';

                if (answerState === 'answered' && isSelected) {
                    cssClass = 'selected';
                }

                if (answerState === 'correct' || answerState === 'wrong' && isSelected) {
                    cssClass = answerState;
                }

                return (
                    <li key={answer} className="answer">
                        <button
                            className={cssClass}
                            onClick={() => { onSelect(answer) }}
                            disabled={answerState !== ''}
                        >
                            {answer}
                        </button>
                    </li>
                )
            })}
        </ul>

    )
}

export default Answers;