import React, {useContext} from "react";
import { QuizContext } from "../Helpers/Contexts"
import { Questions } from "../Helpers/QuestionBank";


const EndScreen = () =>{

    const {score,setScore, gameState, setGameState} = useContext(QuizContext)
    
    const backToMenu = () =>{
        setGameState('mainMenu') 
        setScore(0)
    }

    return (
        <div>
            <h1>Your Score is {score} / {Questions.length}</h1>
            <button className="back" onClick={backToMenu}>Back to Menu</button>
        </div>
    )
}

export default EndScreen