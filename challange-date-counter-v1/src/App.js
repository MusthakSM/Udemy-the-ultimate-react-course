import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const today = new Date();
  const futureDate = new Date();
  futureDate.setDate(today.getDate() + count);

  return (
    <div className="App">
      <Step step={step} setStep={setStep} />
      <Counter step={step} count={count} setCount={setCount} />
      <p>
        {count === 0
          ? "Today is "
          : count > 0
          ? `${count} from today is `
          : `${Math.abs(count)} day ago was `}
        {futureDate.toDateString()}
      </p>
    </div>
  );
}

function Counter({ step, count, setCount }) {
  return (
    <>
      <button onClick={() => setCount((count) => count - step)}>-</button>
      <span> Count: {count} </span>
      <button onClick={() => setCount((count) => count + step)}>+</button>
      <br />
    </>
  );
}

function Step({ step, setStep }) {
  return (
    <>
      <button onClick={() => setStep((step) => Math.max(step - 1, 1))}>
        -
      </button>
      <span> Step: {step} </span>
      <button onClick={() => setStep((step) => step + 1)}>+</button>
      <br />
    </>
  );
}

export default App;
