import { useEffect, useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [step, setStep] = useState(1);

  useEffect(() => {
    console.log("Helloshki");
  }, []);

  useEffect(() => {
    console.log("Counter is", counter);
    if (counter === 30) {
      setCounter(0);
    }
  }, [counter]);
  useEffect(() => {
    console.log("Step is:", step);
  }, [step]);

  const handleClick = () => {
    if (counter >= 50) {
      return alert("That is enough");
    }
    setCounter((prevState) => prevState + step);
  };
  const handleMinusClick = () => {
    if (counter <= 0) {
      return alert("You can not change counter less than 0");
    }
    setCounter((prev) => prev - step);
  };
  const handleReset = (e) => {
    setCounter(0);
    setStep(1);
  };

  return (
    <div>
      <div>
        <h1>{counter}</h1>
        <input type="text" onChange={(e) => setStep(+e.target.value)} />
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
