import "./App.css";
import { useState } from "react";
import Greeting from "./components/Greeting";
import Heading from "./components/Heading";
import Score from "./components/Score";
import Buttons from "./components/Buttons";

// One way to improve this would be to create a Button component that you use 
// inside the Buttons component that you reuse in different ways depending 
// on whether you are incrementing, decrementing or resetting the score

function App() {
  const[ name, ] = useState("Dave");
  const [ score, setScore ] = useState(0);


  return (
    <>
      <Heading name={name} />
      <Greeting />
      <Score score={score} />
      <Buttons score={score} setScore={setScore} />
    </>
  );
}

export default App;
