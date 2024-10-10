import React, { useState } from "react";

const Counter  = () => {
  const [counter, setCounter] = useState(4);
const [checked,setChecked ] = useState(false)
  const incrementCounter = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const decrementCounter = () => {
    setCounter((prevCounter) => prevCounter - 1);
  };

  return (
    <div className="counter">
      <button data-testid="increment" onClick={incrementCounter}>
        +
      </button>
      <p data-testid="counter">Count: {counter}</p>
      <button data-testid="decrement" onClick={decrementCounter}>
        -
      </button>

      <input data-testid="passfield" type="text"/> 
      <input data-testid="checkbox" type="checkbox" onChange={()=>setChecked(!checked)} checked={checked}/>
    </div>
  );
};

export default Counter;