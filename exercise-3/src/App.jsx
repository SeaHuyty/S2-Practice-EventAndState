import React, { useState } from "react";

function App() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState("");

  const onA = (event) => {
    setA(event.target.value);
  };

  const onB = (event) => {
    setB(event.target.value);
  };

  const handleCompute = () => {
    if (isNaN(a) || isNaN(b) || a === "" || b === "") {
      setResult("Error: Invalid input");
    } else {
      const sum = parseFloat(a) + parseFloat(b);
      setResult(`${sum}`);
    }
  };

  return (
    <main>
      <h1>Calculator</h1>

      <label>A =</label>
      <input type="text" onKeyUp={onA} />

      <label>B =</label>
      <input type="text" onKeyUp={onB} />

      <label>A + B =</label>

      <input
        type="text"
        value={result}
        disabled
        style={{
          color: result.includes("Error") ? "red" : "black", // Set text color to red for errors
        }}
      />

      {/* Bind the button click to handleCompute */}
      <button onClick={handleCompute}>Compute</button>
    </main>
  );
}

export default App;
