import React, { Component } from "react";
import Project from "./Project";

class Projectlist extends Component {
  render() {
    return (
      <div className="Projectlist">
        {this.props.projectArray.map((p, i) => (
          <Project
            project={p}
            changeProjectStatus={this.props.changeProjectStatus}
            deleteProject={this.props.deleteProject}
            key={i}
          />
        ))}
      </div>
    );
  }
}

export default Projectlist;
