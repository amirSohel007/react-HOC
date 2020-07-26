import React from "react";
import HoverCounter from "./components/NonHOC/HoverCounter";
import ClickCounter from "./components/NonHOC/ClickCounter";
import HOCClickCounter from "./components/HOC/ClickCounter";
import HOCHoverCounter from "./components/HOC/HoverCounter";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="main">
        <div className="box">
            <h2>Without HOC Example</h2>
            <ClickCounter />
            <HoverCounter />
        </div>

        <div className="box">
          <h2>With HOC Example</h2>
          <HOCClickCounter />
          <HOCHoverCounter />
        </div>
      </div>
    </div>
  );
}

export default App;
