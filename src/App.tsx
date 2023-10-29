import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import data from "./Data/dump.json";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setNumber((number) => number + 1);
    }, 1000);
  }, [count]);

  const socialMediaList = data.SocialMedias;
  return (
    <>
      <Router>
        <div className="App">
          <ul className="App-header">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </div>
      </Router>

      <ul>
        {socialMediaList.map((s) => (
          <li>{s}</li>
        ))}
      </ul>
      <h1>E-cell Techie</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Everytime button is pressed count function is executed and count is
          updated
        </p>
        <p>Current Number is {number}</p>
      </div>
    </>
  );
}

export default App;
