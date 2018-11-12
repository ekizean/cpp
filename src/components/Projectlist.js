import React, { Component } from "react";
import Project from "./Project";

class Projectlist extends Component {

  render() {
    return (
      <div className="Projectlist">
        {this.props.projectArray.map((p, i) => (
          <Project
            title={p.title}
            description={p.description}
            status={p.status}
            id={i}
            changeProjectStatus={this.props.changeProjectStatus}
          />
        ))}
      </div>
    );
  }
}

export default Projectlist;
