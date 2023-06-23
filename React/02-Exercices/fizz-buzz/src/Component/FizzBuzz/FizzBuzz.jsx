import React, { useState, useEffect } from 'react';

function FizzBuzz() {
  const [counter, setCounter] = useState(1);
  const [isFizz, setFizz] = useState(false);
  const [isBuzz, setBuzz] = useState(false);

  useEffect(() => {
    setFizzBuzzState();
  }, [counter]);

  const setFizzBuzzState = () => {
    console.log(counter);
    if (counter % 3 === 0) {
      setFizz(true);
      setBuzz(false);
    } else if (counter % 5 === 0) {
      setBuzz(true);
      setFizz(false);
    } else {
      setBuzz(false);
      setFizz(false);
    }
  };

  const PlusClick = () => {
    setCounter(counter + 1);
    setFizzBuzzState();
  };

  const MoinsClick = () => {
    if (counter > 1) {
      setCounter(counter - 1);
      setFizzBuzzState();
    }
  };

  const displayCounterOrFizzBuzz = () => {
    if (isFizz) {
      return "Fizz";
    }

    if (isBuzz) {
      return "Buzz";
    }

    return counter;
  };

  return (
    <>
      <p>{displayCounterOrFizzBuzz()}</p>
      <button onClick={() => MoinsClick()}>-</button>
      <button onClick={() => PlusClick()}>+</button>
    </>
  );
}

export default FizzBuzz;
