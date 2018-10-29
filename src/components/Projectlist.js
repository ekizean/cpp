import React, { Component } from "react";
import Project from "./Project";

class Projectlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectArray: [
        {
          title: "SAPSA",
          description: "VR is King",
          status: "Ej påbörjad"
        },
        {
          title: "DataTjej",
          description: "Jobbportal",
          status: "Påbörjad"
        }
      ]
    };
  }

  render() {
    return (
      <div className="Projectlist">
        {this.state.projectArray.map(p => (
          <Project
            title={p.title}
            description={p.description}
            status={p.status}
          />
        ))}
      </div>
    );
  }
}

export default Projectlist;
