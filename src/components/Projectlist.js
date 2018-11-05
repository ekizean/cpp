import React, { Component } from "react";
import Project from "./Project";

class Projectlist extends Component {
    changeProjectStatus = this.changeProjectStatus.bind(this);

    state = {
      projectArray: [
        {
          title: "SAPSA",
          description: "VR is King",
          status: "Ej påbörjad",
        },
        {
          title: "DataTjej",
          description: "Jobbportal",
          status: "Påbörjad",
        }
      ]
    };

  changeProjectStatus(id) {
    this.setState(prevState => {
      prevState.projectArray[id].status = prevState.projectArray[id].status === "Pågående" ? "Ej påbörjad" : "Pågående";
      
      return {
        prevState
      };
    });
  }

  render() {
    return (
      <div className="Projectlist">
        {this.state.projectArray.map((p, i) => (
          <Project
            title={p.title}
            description={p.description}
            status={p.status}
            id={i}
            changeProjectStatus={this.changeProjectStatus}
          />
        ))}
      </div>
    );
  }
}

export default Projectlist;
