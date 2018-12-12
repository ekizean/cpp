import React, { Component } from "react";
import "./App.scss";
import ProjectList from "./components/ProjectList";
import Header from "./components/Header";
import CreateProject from "./components/CreateProject";
import Database from "./firebase/firebase";
import { finished } from "stream";
import Footer from "./components/Footer";
import Modal from "react-modal";

class App extends Component {
  changeProjectStatus = this.changeProjectStatus.bind(this);
  createProject = this.createProject.bind(this);
  deleteProject = this.deleteProject.bind(this);
  showOverview = this.showOverview.bind(this);

  state = {
    projectArray: [],
    showOverview: false
  };

  changeProjectStatus(id, status) {
    let statusText = status === "Pågående" ? "Ej påbörjad" : "Pågående";

    Database.ref(`projects/${id}`).update({ status: statusText });

    this.setState(prevState => {
      return {
        projectArray: prevState.projectArray.map(p => {
          if (p.id == id) {
            p.status = statusText;
          }

          return p;
        })
      };
    });
  }

  showOverview() {
    this.setState({
      showOverview: true
    });
  }

  createProject(newProject) {
    Database.ref("projects")
      .push(newProject)
      .then(this.readProjectsFromDatabase());
    this.setState({ showOverview: false });
  }

  deleteProject(id) {
    Database.ref(`projects/${id}`)
      .remove()
      .then(
        this.setState({
          projectArray: this.state.projectArray.filter(
            project => project.id !== id
          )
        })
      );
  }

  readProjectsFromDatabase() {
    Database.ref("projects")
      .once("value")
      .then(snapshot => {
        const projectArray = [];

        snapshot.forEach(snapshotChild => {
          projectArray.push({
            id: snapshotChild.key,
            ...snapshotChild.val()
          });
        });

        this.setState({
          projectArray
        });
      });
  }

  componentDidMount() {
    this.readProjectsFromDatabase();
  }

  render() {
    return (
      <div className="App">
        <Header showOverview={this.showOverview} />
        <main>
          <Modal
            className="Modal"
            isOpen={this.state.showOverview}
            onRequestClose={() => this.setState({ showOverview: false })}
          >
            {this.state.showOverview && (
              <CreateProject createProject={this.createProject} />
            )}
          </Modal>
          <ProjectList
            projectArray={this.state.projectArray}
            changeProjectStatus={this.changeProjectStatus}
            deleteProject={this.deleteProject}
          />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
