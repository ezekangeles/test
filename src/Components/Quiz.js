import React from "react";
import { useState, useContext } from "react";
import { Questions } from '../Helpers/QuestionBank'
import { QuizContext } from "../Helpers/Contexts"


const Quiz = () =>{

    const [currQuestion, setCurrQuestion] = useState(0)
    const [optionChosen, setOptionChosen] = useState('')
    const {score,setScore, gameState, setGameState} = useContext(QuizContext)

    const nextQuestion = () =>{
        if(Questions[currQuestion].answer === optionChosen){
            setScore(score + 1)
        }
        setCurrQuestion(currQuestion + 1)
    }

    const finishQuiz = () =>{
        if(Questions[currQuestion].answer === optionChosen){
            setScore(score + 1)
        }
        setGameState('endScreen')
    }


    return (
        <div>
            <h1>{Questions[currQuestion].prompt}</h1>
            <div className="options">
                <button onClick={() => {setOptionChosen('A')}}>{Questions[currQuestion].optionA}</button>
                <button onClick={() => {setOptionChosen('B')}}>{Questions[currQuestion].optionB}</button>
                <button onClick={() => {setOptionChosen('C')}}>{Questions[currQuestion].optionC}</button>
                <button onClick={() => {setOptionChosen('D')}}>{Questions[currQuestion].optionD}</button>
            </div>
            {currQuestion === Questions.length - 1 ? (
                <button className="next" onClick={finishQuiz}>Finish Quiz</button>
            ): (<button className="next" onClick={nextQuestion}>Next Question</button>)}
            
        </div>
    )
}

export default Quiz