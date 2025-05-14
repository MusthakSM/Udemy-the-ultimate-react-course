import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [fromCurr, setFromCurr] = useState("EUR");
  const [toCurr, setToCurr] = useState("USD");
  const [inValue, setInValue] = useState(1);
  const [convertedValue, setConvertedValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {
      async function convert() {
        setIsLoading(true);
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${inValue}&from=${fromCurr}&to=${toCurr}`
        );
        const data = await res.json();
        console.log(data.rates[toCurr]);
        setConvertedValue(data.rates[toCurr].toFixed(2));
        setIsLoading(false);
      }

      if (fromCurr === toCurr) return setConvertedValue(inValue);

      if (!inValue) return setConvertedValue("");

      convert();
    },
    [inValue, fromCurr, toCurr]
  );

  return (
    <div>
      <input
        type="text"
        value={inValue}
        onChange={(e) => setInValue(e.target.value)}
        disabled={isLoading}
      />
      <select
        value={fromCurr}
        onChange={(e) => {
          setFromCurr(e.target.value);
        }}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        value={toCurr}
        onChange={(e) => {
          setToCurr(e.target.value);
        }}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>
        {convertedValue} {toCurr}
      </p>
    </div>
  );
}

export default App;
