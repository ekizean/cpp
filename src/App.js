import React, { Component } from "react";
import "./App.css";
import Projectlist from "./components/Projectlist";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Projectlist />
      </div>
    );
  }
}

export default App;
