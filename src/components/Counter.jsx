import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
  };
  const handleMinusClick = () => {
    setCounter(counter - 1);
  };
  const handleReset = (e) => {
    setCounter(0);
  };

  return (
    <div>
      <div>
        <h1>{counter}</h1>
        <div>
          <button onClick={handleMinusClick}>minus</button>
          <button onClick={handleReset}>reset</button>
          <button onClick={handleClick}>plus</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
