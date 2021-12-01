// import Button from "./Button"
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleCount = (value) => {
    setCount(count + value);
  };

  const handleDouble = () => {
    setCount(count * 2);
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => handleCount(-1)}>-</button>
      <button onClick={() => handleCount(1)}>+</button>
      <button onClick={() => handleDouble()}>Double</button>
    </>
  );
}
export default Counter;
