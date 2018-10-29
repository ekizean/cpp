import React, { Component } from "react";
import Projectstatus from "./Projectstatus";

class Project extends Component {
  render() {
    return (
      <div className="Project">
        <h1>{this.props.title}</h1>
        <Projectstatus status={this.props.status} />
        <p>{this.props.description}</p>
        <p>Radera</p>
      </div>
    );
  }
}

export default Project;
