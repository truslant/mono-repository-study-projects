import quizLogo from '../assets/quiz-logo.png'
import Quiz from './Quiz'

const Header = () => {
    return (
        <header>
            <img src={quizLogo} alt="logo" />
            <h1>ReactQuiz</h1>
        </header>
    )
}

export default Header