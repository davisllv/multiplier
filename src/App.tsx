import React, { useState, useEffect } from 'react';
import './styles.css';

const App: React.FC = () => {
  const [numberOne, setNumberOne] = useState(0);
  const [numberTwo, setNumberTwo] = useState(0);
  const [result, setResult] = useState(0);

  function incrementNumber(
    setNumber: React.Dispatch<React.SetStateAction<number>>
  ): void {
    setNumber((previousState) => {
      const newNumber = previousState + 1;
      return newNumber;
    });
  }
  function decrementNumber(
    setNumber: React.Dispatch<React.SetStateAction<number>>,
    number: number
  ): void {
    if (number < 1) return;
    setNumber((previousState) => {
      const newNumber = previousState - 1;
      return newNumber;
    });
  }
  function initialState(
    setNumber: React.Dispatch<React.SetStateAction<number>>
  ): void {
    setNumber(0);
  }

  useEffect(() => {
    setResult(numberOne * numberTwo);
  }, [numberOne, numberTwo]);

  return (
    <div>
      <div className="firstBox">
        <h1>Multiplier</h1>
        <div className="buttonDivs">
          <section>
            <button
              type="button"
              className="add"
              onClick={() => {
                incrementNumber(setNumberOne);
              }}
            >
              +
            </button>
            <button
              type="button"
              className="sub"
              onClick={() => {
                decrementNumber(setNumberOne, numberOne);
              }}
            >
              -
            </button>
            <button
              type="button"
              className="acButton"
              onClick={() => {
                initialState(setNumberOne);
              }}
            >
              AC
            </button>
            <p>{numberOne}</p>
          </section>
          <button
            type="button"
            className="add"
            onClick={() => {
              incrementNumber(setNumberTwo);
            }}
          >
            +
          </button>
          <button
            type="button"
            className="sub"
            onClick={() => {
              decrementNumber(setNumberTwo, numberTwo);
            }}
          >
            -
          </button>
          <button
            type="button"
            className="acButton"
            onClick={() => {
              initialState(setNumberTwo);
            }}
          >
            AC
          </button>
          <p>{numberTwo}</p>
          <hr />
        </div>
        <p className="result">{result}</p>
      </div>
      <span className="cop">©Made By Davi</span>
    </div>
  );
};

export default App;
