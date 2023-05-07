import { useState } from "react";
import AnimalShow from "./AnimalShow";

function getRandomAnimal() {
    const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];

    return animals[Math.floor(Math.random() * animals.length)]
}


function App() {
    //Array destructuring. First element is our piece of data and the second one is setter function, used to update our piece of state.
    //const [count, setCount] = useState(0); // default state is an argument in useState(...)

    // NEVER GOING TO:
    // count = 123
    // if we want to modify our piece of state, we use setCount function instead
    // setCount(123) 

    const [animals, setAnimals] = useState([]);

    const handleClick = () => {
        //setCount(count + 1);

        setAnimals([...animals, getRandomAnimal()]);
    };

    const renderedAnimals = animals.map((animal, index) => {
        return <AnimalShow type={animal} key={index} />
    })


    return (
        <div>
            <button onClick={handleClick}>Add Animal</button>
            <div>{renderedAnimals}</div>
        </div>
    );
}

export default App;