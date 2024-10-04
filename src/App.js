import { useState } from "react";
import "./App.css";

function App() {
  // App 1
  const [counter, setCounter] = useState(0);
  const [style, setStyle] = useState(false);

  const plus = () => {
    setCounter(counter + 1);
    setStyle(!style);
  };

  // App 2
  const [data, setData] = useState({
    fname: "",
    lname: "",
  });

  // App 3
  const [number, setNumber] = useState([]);
  const random = () => {
    setNumber([...number, { value: Math.floor(Math.random()* 10) }]);
  };

  return (
    <div className="App">
      <div className="app-1">
        <h2>App 1</h2>
        <div className="content">
          <button onClick={plus}>+</button>
          <p
            style={
              style
                ? { backgroundColor: "#dda2dd" }
                : { backgroundColor: "linen" }
            }
          >
            {counter}
          </p>
        </div>
      </div>

      <div className="app-2">
        <h2>App 2</h2>
        <div className="content">
          <input
            type="text"
            placeholder="Enter your first name"
            onChange={(e) => {
              setData({ ...data, fname: e.target.value });
            }}
          />
          <input
            type="text"
            placeholder="Enter your last name"
            onChange={(e) => {
              setData({ ...data, lname: e.target.value });
            }}
          />
          <p>
            {data.fname} {data.lname}
          </p>
        </div>
      </div>
      <div className="app-3">
        <h2>App 3</h2>
        <div className="content">
          <button onClick={random}>Add Number</button>
          <ul>
            {number.map((item) => 
              <li>{item.value}</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
