import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./index.css";
import Navbar from "./Navbar";
import Content from "./Content";
import Contact from "./Contact";
import GetStarted from "./GetStarted";
import GamePlay from "./GamePlay";

function App() {
  const [GameStarted, SetGameStarted] = useState(false);

  const toggleGame = () => {
    SetGameStarted((prev) => !prev);
  };
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route
            path="/GetStarted"
            element={
              GameStarted ? <GamePlay /> : <GetStarted toggle={toggleGame} />
            }
          />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
