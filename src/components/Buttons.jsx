function Buttons({ score, setScore }) {
      const increment = () => {
        setScore(score + 1);
      };
      const decrement = () => {
        setScore(score - 1);
      };
      const reset = () => {
        setScore(0);
      };
  return (
    <>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}

export default Buttons;
