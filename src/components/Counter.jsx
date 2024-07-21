import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    if (counter >= 10) {
      return alert("That is enough");
    }
    setCounter((prevState) => prevState + 1);
  };
  const handleMinusClick = () => {
    if (counter <= 0) {
      return alert("You can not change counter less than 0");
    }
    setCounter((prev) => prev - 1);
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
