import React from "react";
import "./App.css";
import Example from "./Example";
import DrawComp from "./DrawComp";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <DrawComp />
        </p>
      </header>
    </div>
  );
}

export default App;
