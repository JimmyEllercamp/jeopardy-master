// GameCard.js

const GameCard = (props) => {

    const {question, answer, value, handleClick} = props;

    return (
        <div className="gameCard">
            <h2>{question}</h2>
            <h3>{answer}</h3>
            <p>{value}</p>
            <button onClick={handleClick}>Ready To Play?</button>
        </div>
    )
}

export default GameCard;