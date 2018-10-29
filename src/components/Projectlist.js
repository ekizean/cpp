import React, { Component } from "react";
import Project from "./Project";

class Projectlist extends Component {
  render() {
    return (
      <div className="Projectlist">
        <Project />
        <Project />
      </div>
    );
  }
}

export default Projectlist;
