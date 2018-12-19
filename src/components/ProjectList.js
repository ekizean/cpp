import React, { Component } from "react";
import Project from "./Project";

class ProjectList extends Component {
  render() {
    return (
      
      <div className="page-container">
        <div className="projectList">
          {this.props.projectArray.map((p, i) => (
            <Project
              showModal = {this.props.showModal}
              project={p}
              changeProjectStatus={this.props.changeProjectStatus}
              deleteProject={this.props.deleteProject}
              key={i}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default ProjectList;
