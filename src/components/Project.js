import React, { Component } from "react";
import Projectstatus from "./Projectstatus";
class Project extends Component {
  render() {
    return (
      <div className="Project">
        <h1>Rubrik</h1>
        <Projectstatus />
        <p>Beskrivning</p>
        <p>Radera</p>
      </div>
    );
  }
}

export default Project;
