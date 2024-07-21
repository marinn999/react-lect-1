import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
  };
  const handleMinusClick = (name) => {
    console.log(`Hello ${name}`);
  };
  const handleReset = (e) => {
    console.log(e);
    e.target.innerHTML = "Hello Button!";
  };

  return (
    <div>
      <div>
        <h1>{counter}</h1>
        <div>
          <button onClick={() => handleMinusClick("Marina")}>minus</button>
          <button onClick={handleReset}>reset</button>
          <button onClick={handleClick}>plus</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
