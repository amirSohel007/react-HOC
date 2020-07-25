import React from "react";
import HoverCounter from "./components/NonHOD/HoverCounter";
import ClickCounter from "./components/NonHOD/ClickCounter";
import HODClickCounter from "./components/HOD/ClickCounter";
import HODHoverCounter from "./components/HOD/HoverCounter";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="main">
        <div className="box">
            <h2>Without HOD Example</h2>
            <ClickCounter />
            <HoverCounter />
        </div>

        <div className="box">
          <h2>With HOD Example</h2>
          <HODClickCounter />
          <HODHoverCounter />
        </div>
      </div>
    </div>
  );
}

export default App;
