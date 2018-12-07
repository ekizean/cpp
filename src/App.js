import React, { Component } from "react";
import "./App.scss";
import Projectlist from "./components/Projectlist";
import Header from "./components/Header";
import CreateProject from "./components/CreateProject";
import Database from "./firebase/firebase";
import { finished } from "stream";

class App extends Component {
  changeProjectStatus = this.changeProjectStatus.bind(this);
  createProject = this.createProject.bind(this);
  deleteProject = this.deleteProject.bind(this);

  state = {
    projectArray: []
  };

  changeProjectStatus(id, status) {
    let statusText = status === "Pågående" ? "Ej påbörjad" : "Pågående";

    Database
      .ref(`projects/${id}`)
      .update({ status: statusText })

    this.setState(
      prevState => {
        return {
          projectArray: prevState.projectArray.map(p => { 
            if (p.id == id) {
              p.status = statusText;
            }
            
            return p; 
          })
        };
      }
    );
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
