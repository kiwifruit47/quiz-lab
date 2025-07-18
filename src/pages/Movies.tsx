import { Link } from 'react-router-dom'
import { Quiz } from '../components/Quiz/Quiz'

export const Movies = () => {
  return (
    <>
      <Link to='/'><img src="src/assets/QuizLab.png" alt="logo" /></Link>
      <Quiz apiUrl = {"https://opentdb.com/api.php?amount=5&category=11&difficulty=easy"}></Quiz>
    </>
  )
}
