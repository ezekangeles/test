import React from "react";
import { useState, useContext } from "react";
import MainMenu from "./Components/MainMenu";
import Quiz from "./Components/Quiz";
import EndScreen from "./Components/EndScreen";
import { QuizContext } from "./Helpers/Contexts";

const App = () =>{

    const [gameState, setGameState] = useState('mainMenu')
    const [score, setScore] = useState(0)


    return (
        <div className="container">
            <h1>Quiz App</h1>

            <QuizContext.Provider value={{gameState, setGameState, score, setScore}}>   
                {gameState == 'mainMenu' && <MainMenu />}
                {gameState == 'quiz' && <Quiz />}
                {gameState == 'endScreen' && <EndScreen />}
            </QuizContext.Provider>  
        </div>
    )
}

export default App