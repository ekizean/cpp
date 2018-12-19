import React, { Component } from "react";
import "./App.scss";
import ProjectList from "./components/ProjectList";
import Header from "./components/Header";
import CreateProject from "./components/ProjectDetail";
import Database from "./firebase/firebase";
import { finished } from "stream";
import Footer from "./components/Footer";
import Modal from "react-modal";
import ProjectDetail from "./components/ProjectDetail";

class App extends Component {
  changeProjectStatus = this.changeProjectStatus.bind(this);
  createProject = this.createProject.bind(this);
  deleteProject = this.deleteProject.bind(this);
  showModal = this.showModal.bind(this);

  state = {
    projectArray: [],
    modalState:  false
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

  showModal(mode, projectData = null) {
    this.setState({
      modalState: mode,
      currentProject: projectData
    });
  }

  createProject(newProject) {
    Database.ref("projects")
      .push(newProject)
      .then(this.readProjectsFromDatabase());
    this.setState({ modalState: false });
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
        <Header showModal={this.showModal} />
        <main>
          <Modal
            ariaHideApp={false}
            className="Modal"
            isOpen={this.state.modalState != false}
            onRequestClose={() => this.setState({ modalState: false })}
          >

              <ProjectDetail 
              createProject={this.createProject} 
              modalState = {this.state.modalState} 
              currentProject = {this.state.currentProject}
              showModal = {this.showModal}
              />

          </Modal>
          <ProjectList
            projectArray={this.state.projectArray}
            changeProjectStatus={this.changeProjectStatus}
            deleteProject={this.deleteProject}
            showModal = {this.showModal}
          />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
