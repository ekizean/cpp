import React, { Component } from "react";
import "./App.css";
import Projectlist from "./components/Projectlist";
import Header from "./components/Header";
import CreateProject from "./components/CreateProject";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <CreateProject />
        <Projectlist />
      </div>
    );
  }
}

export default App;
