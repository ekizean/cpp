import React, { Component } from "react";
import "./App.css";
import Projectlist from "./components/Projectlist";
import Header from "./components/Header";
import CreateProject from "./components/CreateProject";
import { database } from "./firebase/firebase";

class App extends Component {
  changeProjectStatus = this.changeProjectStatus.bind(this);
  createProject = this.createProject.bind(this);
  deleteProject = this.deleteProject.bind(this);

  state = {
    projectArray: [
      {
        id: 0,
        title: "SAPSA",
        description: "VR is King",
        status: "Ej påbörjad"
      },
      {
        id: 1,
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
    database
      .ref("projects")
      .set(newProject)
      .then(
        this.setState({
          projectArray: [...this.state.projectArray, newProject]
        })
      );
  }

  deleteProject(id) {
    this.setState({
      projectArray: this.state.projectArray.filter(project => project.id !== id)
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
          deleteProject={this.deleteProject}
        />
      </div>
    );
  }
}

export default App;
