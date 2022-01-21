// GameCard.js
import { useEffect, useState } from 'react';

const GameCard = (props) => {

    const {question, answer, value, handleClick, reset, readyState} = props;

    const [currentQuestion, setCurrentQuestion] = useState("");
    const [currentAnswer, setCurrentAnswer] = useState("Ready To Play?");
    const [currentValue, setCurrentValue] = useState();

    useEffect( () => {
        question ? setCurrentQuestion('Question: ' + question) : setCurrentQuestion('Ever wanted to be Alex Trebek? Now you are.');
        answer ? setCurrentAnswer('Answer: ' + answer) : setCurrentAnswer('Ready To Play?');
        value ? setCurrentValue('Points: ' + value) : setCurrentValue();
    }, [readyState, question, answer, value]);

    return (
        <section className="gameCard wrapper">
            <div className="playCard flexing">
                <h2>{currentQuestion}</h2>
                <h3>{currentAnswer}</h3>
                <p>{currentValue}</p>
            </div>
            <div className="buttons">
                <button className="startButton"onClick={handleClick}>{currentQuestion ? `Next Question` : `Ready To Play?`}</button>
                <button className="resetButton" onClick={reset}>Start Again?</button>
            </div>
        </section>
    )
}

export default GameCard;