// GameCard.js
import { useEffect, useState } from 'react';

const GameCard = (props) => {

    const {question, answer, value, handleClick, questionObject, reset} = props;

    const [currentQuestion, setCurrentQuestion] = useState("");
    const [currentAnswer, setCurrentAnswer] = useState("");
    const [currentValue, setCurrentValue] = useState();

    useEffect( () => {
        question ? setCurrentQuestion('Question: ' + question) : setCurrentQuestion('');
        answer ? setCurrentAnswer('Answer: ' + answer) : setCurrentAnswer('');
        value ? setCurrentValue('Points: ' + value) : setCurrentValue();
    }, [handleClick]);

    return (
        <div className="gameCard">
            <h2>{currentQuestion}</h2>
            <h3>{currentAnswer}</h3>
            <p>{currentValue}</p>
            <button onClick={handleClick}>{currentQuestion ? `Next Question` : `Ready To Play?`}</button>
            <button onClick={reset}>Start Again?</button>
        </div>
    )
}

export default GameCard;