import './App.css';
import axios from 'axios';
import { useState } from 'react';
import GameCard from './components/GameCard.js';
import Header from './components/Header.js';
import Teams from './components/Teams.js';
import Footer from './components/Footer.js';


function App() {

    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [value, setValue] = useState();
    const [readyState, setReadyState] = useState(true);
    const handleClick = () => {
        const apiUrl = 'https://jservice.io/api/random';

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
                questionObject.value ? setValue(questionObject.value) : setValue(200);
                setReadyState(false);
                })
    }

    const reset = () => {
      setQuestion("");
      setAnswer("");
      setValue();
      setReadyState(true);
    }




  return (
    <div className="App">
      <Header />
      <Teams value={value} readyState={readyState}/>
      <GameCard question={question} answer={answer} value={value} handleClick={handleClick} reset={reset} readyState={readyState}/>
      <Footer />
      
    </div>
  );
}

export default App;
