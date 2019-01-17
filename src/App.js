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
  updateProject = this.updateProject.bind(this);
  setSearch = this.setSearch.bind(this);
  filterProjects = this.filterProjects.bind(this);
  hideModal = this.hideModal.bind(this);

  state = {
    projectArray: [],
    search: "",
    modalState: false
  };

  changeProjectStatus(id, status) {
    let statusText = status === "Pågående" ? "Ej påbörjad" : "Pågående";

    Database.ref(`projects/${id}`).update({ status: statusText });

    this.setState(prevState => {
      return {
        projectArray: prevState.projectArray.map(p => {
          if (p.id === id) {
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

  hideModal() {
    this.setState({
      modalState: false
    });
  }

  createProject(newProject) {
    Database.ref("projects")
      .push({
        title: newProject.title,
        description: newProject.description,
        status: newProject.status
      })
      .then(this.readProjectsFromDatabase());
    this.setState(() => ({ modalState: false }));
  }

  updateProject(project) {
    Database.ref(`projects/${project.id}`)
      .update({
        title: project.title,
        description: project.description,
        status: project.status
      })
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
          ),
          modalState: false
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
            ...snapshotChild.val(),
            id: snapshotChild.key
          });
        });
        this.setState({
          projectArray,
          filteredProjects: projectArray
        });
      });
  }

  setSearch(search) {
    this.setState(() => ({
      search
    }));
  }

  filterProjects() {
    return this.state.projectArray.filter(
      project => project.title.includes(this.state.search) || project.description.includes(this.state.search))
  }

  componentDidMount() {
    this.readProjectsFromDatabase();
  }

  render() {
    return (
      <div className="App">
        <Header showModal={this.showModal} setSearch={this.setSearch}/>
        <main>
          <Modal
            ariaHideApp={false}
            className="Modal"
            isOpen={this.state.modalState !== false}
            onRequestClose={() => this.setState({ modalState: false })}
          >
            <ProjectDetail
              createProject={this.createProject}
              modalState={this.state.modalState}
              currentProject={this.state.currentProject}
              showModal={this.showModal}
              deleteProject={this.deleteProject}
              updateProject={this.updateProject}
              changeProjectStatus={this.changeProjectStatus}
              hideModal={this.hideModal}
            />
          </Modal>
          <ProjectList
            projectArray={this.filterProjects()}
            changeProjectStatus={this.changeProjectStatus}
            showModal={this.showModal}
          />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
