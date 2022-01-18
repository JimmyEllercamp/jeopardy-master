// Teams.js
import { useEffect, useState } from 'react';

const Teams = (props) => {

    const {value, reset} = props;
    const [points1, setPoints1] = useState(0);
    const [points2, setPoints2] = useState(0);
    const [points3, setPoints3] = useState(0);
    const [points4, setPoints4] = useState(0);

   
    useEffect( () => {
        !value ? setPoints1(0) : setPoints1(points1);
        !value ? setPoints2(0) : setPoints2(points2);
        !value ? setPoints3(0) : setPoints3(points3);
        !value ? setPoints4(0) : setPoints4(points4);
    }, [reset]);

    const winner = () => {
        console.log(`Winner!`);
    }


    return (
        <div className="teams">
            <ul>
                <li>
                    <h3>Team 1</h3>
                    <p>{points1}</p>
                    <button onClick={ () => { value ? setPoints1(points1 + value) : setPoints1(0); }}>Add Points</button>
                </li>
                <li>
                    <h3>Team 2</h3>
                    <p>{points2}</p>
                    <button onClick={ () => { value ? setPoints2(points2 + value) : setPoints2(0); }}>Add Points</button>
                </li>
                <li>
                    <h3>Team 3</h3>
                    <p>{points3}</p>
                    <button onClick={ () => { value ? setPoints3(points3 + value) : setPoints3(0); }}>Add Points</button>
                </li>
                <li>
                    <h3>Team 4</h3>
                    <p>{points4}</p>
                    <button onClick={ () => { value ? setPoints4(points4 + value) : setPoints4(0); }}>Add Points</button>
                </li>
            </ul>
            <button onClick={winner}>Declare Winner</button>
        </div>
    )
}

export default Teams;