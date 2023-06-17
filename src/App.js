import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [result, setResult] = useState("");
  const [calculated, setCalculated] = useState(false);

  const handleClick = (e) => {
    const clickedValue = e.target.name;
    const reNumber = /[0-9]/;
    const reOperator = /[+\-*/]/;

    if (calculated && reNumber.test(clickedValue)) {
      setResult(clickedValue);
      setCalculated(false);
    } else if (calculated && reOperator.test(clickedValue)) {
      if (result === "Error" || result === "Infinity") {
        setResult(clickedValue);
      } else {
        setResult(result.concat(clickedValue));
        setCalculated(false);
      }
    } else {
      setResult(result.concat(clickedValue));
    }
  };

  const clear = () => {
    setResult("");
    setCalculated(false);
  };

  const backspace = () => {
    setResult(result.slice(0, -1));
    setCalculated(false);
  };

  const calculate = () => {
    try {
      if (/[+\-*/]{2,}/.test(result)) {
        setResult("Error");
        setCalculated(true);
        return;
      }

      setResult(eval(result).toString());
      setCalculated(true);
    } catch (err) {
      setResult("Error");
      setCalculated(true);
    }
  };

  return (
    <>
      <div className="container">
        <form>
          <input
            type="text"
            value={result}
            onChange={(e) => setResult(e.target.value)}
          />
        </form>

        <div className="keypad">
          <button className="highlight" onClick={clear} id="clear">
            Clear
          </button>
          <button className="highlight" onClick={backspace} id="backspace">
            C
          </button>
          <button className="highlight" name="/" onClick={handleClick}>
            &divide;
          </button>
          <button name="7" onClick={handleClick}>
            7
          </button>
          <button name="8" onClick={handleClick}>
            8
          </button>
          <button name="9" onClick={handleClick}>
            9
          </button>
          <button className="highlight" name="*" onClick={handleClick}>
            &times;
          </button>
          <button name="4" onClick={handleClick}>
            4
          </button>
          <button name="5" onClick={handleClick}>
            5
          </button>
          <button name="6" onClick={handleClick}>
            6
          </button>
          <button className="highlight" name="-" onClick={handleClick}>
            &ndash;
          </button>
          <button name="1" onClick={handleClick}>
            1
          </button>
          <button name="2" onClick={handleClick}>
            2
          </button>
          <button name="3" onClick={handleClick}>
            3
          </button>
          <button className="highlight" name="+" onClick={handleClick}>
            +
          </button>
          <button name="0" onClick={handleClick}>
            0
          </button>
          <button name="." onClick={handleClick}>
            .
          </button>
          <button className="highlight" onClick={calculate} id="result">
            =
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
