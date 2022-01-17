import './App.css';
import axios from 'axios';
import { useState } from 'react';
import GameCard from './components/GameCard.js';


function App() {

    // const apiUrl = 'http://jservice.io/api/random';
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [value, setValue] = useState();

    const handleClick = () => {
        const apiUrl = 'http://jservice.io/api/random';

        axios({
                url: apiUrl,
                method: 'GET',
                dataResponse: 'json',
                params: {
                    format: 'json',
                    count: 1,
                },
            }).then( (response) => {
                const questionObject = response.data[0];
                setQuestion(questionObject.question);
                setAnswer(questionObject.answer);
                setValue(questionObject.value);
                // setQuestion(`Question: ` + questionObject.question);
                // setAnswer(`Answer: ` + questionObject.answer);
                // setValueStatement(questionObject.value);
                // setValue(`Points: ` + valueStatement);
                // !value ? setValue(`Points: ` + 300) : setValue(`Points: ` + questionObject.value);
                // setPointsValue(questionObject.value);
                // (value === 'null') ? setValue(`Points: ` + 200) : setValue(`Points: ` + questionObject.value);
                // setGameButton("Next Question");
                })
    }




  return (
    <div className="App">
      <GameCard question={question} answer={answer} value={value} handleClick={handleClick}/>

      
    </div>
  );
}

export default App;
