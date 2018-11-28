import React, { Component } from "react";
import Project from "./Project";

class Projectlist extends Component {

  render() {
    return (
      <div className="Projectlist">
        {this.props.projectArray.map((p, i) => (
          <Project
            title = {p.title}
            description = {p.description}
            status = {p.status}
            id = {p.id}
            changeProjectStatus = {this.props.changeProjectStatus}
            deleteProject = {this.props.deleteProject}
          />
        ))}
      </div>
    );
  }
}

export default Projectlist;
