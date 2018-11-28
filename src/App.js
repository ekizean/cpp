import React, { Component } from "react";
import "./App.css";
import Projectlist from "./components/Projectlist";
import Header from "./components/Header";
import CreateProject from "./components/CreateProject";

class App extends Component {
  changeProjectStatus = this.changeProjectStatus.bind(this);
  createProject = this.createProject.bind(this);

  state = {
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

  changeProjectStatus(id) {
    this.setState(prevState => {
      prevState.projectArray[0].status =
        prevState.projectArray[id].status === "Pågående"
          ? "Ej påbörjad"
          : "Pågående";

      return {
        prevState
      };
    });
  }

  createProject(newProject) {
    this.setState({
      projectArray: [...this.state.projectArray, newProject]
    });
  }

  deleteProject(e) {}

  render() {
    return (
      <div className="App">
        <Header />
        <CreateProject createProject={this.createProject} />
        <Projectlist
          projectArray={this.state.projectArray}
          changeProjectStatus={this.changeProjectStatus}
        />
      </div>
    );
  }
}

export default App;
