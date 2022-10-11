import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [input, setInput] = useState("");
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setInterval(() => setDate(new Date()), 1000);
  }, []);

  const inputFalseOrTrue = () => {
    if (
      input === null ||
      input === "" ||
      input === undefined ||
      input === false
    ) {
      return <div>{dateAndTime()}</div>;
    } else if (input[0] === "[" && input[input.length - 1] === "]") {
      let parsedArray = JSON.parse(input);

      let condition = Array.isArray(parsedArray);
      if (condition === true) {
        return (
          <div>
            {parsedArray.map((ele, i) => (
              <li key={i} className="some__style">
                {ele}
              </li>
            ))}
          </div>
        );
      }
    } else {
      return <div className="some__style">{input}</div>;
    }
  };

  const dateAndTime = () => {
    return (
      <div className="some__style">
        <p>
          {" "}
          {date.toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric"
          })}
        </p>
        <p>
          {date.toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            hour12: true
          })}
        </p>
      </div>
    );
  };

  return (
    <div className="App">
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      {inputFalseOrTrue()}
    </div>
  );
}
