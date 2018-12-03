import React, { Component } from "react";
import "./App.css";
import Projectlist from "./components/Projectlist";
import Header from "./components/Header";
import CreateProject from "./components/CreateProject";
import Database from "./firebase/firebase";

class App extends Component {
  changeProjectStatus = this.changeProjectStatus.bind(this);
  createProject = this.createProject.bind(this);
  deleteProject = this.deleteProject.bind(this);

  state = {
    projectArray: []
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
    Database
      .ref("projects")
      .push(newProject)
      .then(
        this.setState({
          projectArray: [...this.state.projectArray, newProject]
        })
      );
  }

  deleteProject(id) {
    Database.ref(`projects/${id}`).remove().then(
      this.setState({
        projectArray: this.state.projectArray.filter(project => project.id !== id)
      })
    );

  }

  componentDidMount() {
    Database.ref("projects").once("value").then((snapshot) => {

      const projectArray = [];

      snapshot.forEach((snapshotChild) => {
        projectArray.push({
          id: snapshotChild.key,
          ...snapshotChild.val()
        });
      });

      this.setState({
        projectArray
      }, () => {console.log(this.state);});

      
      
    });
  }

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
