import { useState } from "react";
import colors from "./colors.json";

const ColorPicker = () => {
  const [currentColor, setCurrentColor] = useState("white");
  const handleChangeColor = (color) => {
    console.log(color);
    setCurrentColor(color);
  };

  return (
    <section
      style={{
        backgroundColor: currentColor,
        transition: "background-color 1.5s linear",
      }}
    >
      <div>
        <h1>Current color: {currentColor}</h1>
        <ul>
          {colors.map((item) => (
            <li onClick={() => handleChangeColor(item.color)} key={item.id}>
              {item.color}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ColorPicker;
