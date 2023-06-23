import React, { useState, useEffect } from 'react';
import './Exo_01.css';


function Compteur() {
    const [seconds, setSeconds] = useState(0);
    const [startCounter, setStartCounter] = useState(false);
    const [initialValue, setInitialValue] = useState(0);

    let Historique = new Array();

    const getCompteurValue = (event) => {
        setInitialValue(Number(event.target.value));
    }

    const startCounterHandler = () => {
        setSeconds(initialValue);
        setStartCounter(true);

    }

    const stopCounterHandler = () =>{
        for(let valeurs of Historique){
            
        }
        setSeconds(0);
        setStartCounter(false);
    }

    useEffect(() => {
        if (startCounter) {
            console.log("démarrage du compteur");
            const interval = setInterval(() => {
                setSeconds((prevSeconds) => prevSeconds + 1);
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [startCounter]);

    const submitFormHandler = (event) => {
        event.preventDefault();
        console.log('Value Added');
    }

    return (
        <div className='compteur'>
            <form onSubmit={submitFormHandler}>
                <h1>Main Component</h1>
                <hr />
                <p>Compteur</p>
                <div class="valeurDepart">
                    <label htmlFor="Seconds">Valeur de départ :</label>
                    <input type="number" id="Seconds" onInput={getCompteurValue} />
                </div>
                <button class="Start" onClick={startCounterHandler}>Start</button>
                <div>{seconds}</div>
                <button onClick={stopCounterHandler}>Stop</button>
            </form>
        </div>
    );
}

export default Compteur;







