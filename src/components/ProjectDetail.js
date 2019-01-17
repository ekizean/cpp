import React, { Component } from "react";
import Projectstatus from "./Projectstatus";

class ProjectDetail extends Component {
  handleChange = this.handleChange.bind(this);
  handleSubmit = this.handleSubmit.bind(this);
  resetFields = this.resetFields.bind(this);

  state = {
    project: {
      title: this.props.currentProject ? this.props.currentProject.title : "",
      description: this.props.currentProject
        ? this.props.currentProject.description
        : "",
      status: this.props.currentProject
        ? this.props.currentProject.status
        : "Ej påbörjad",
      id: this.props.currentProject ? this.props.currentProject.id : ""
    }
  };

  handleChange(e) {
    let event = e.target;
    this.setState(prevState => ({
      project: {
        ...prevState.project,
        [event.name]: event.value
      }
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.props.modalState === "create") {
      this.props.createProject(this.state.project);
    } else if (this.props.modalState === "edit") {
      this.props.updateProject(this.state.project);
    }
    this.props.hideModal();
    this.resetFields();
  }

  resetFields() {
    this.setState({
      title: "",
      description: "",
      status: "Ej påbörjad"
    });
  }

  render() {
    return (
      <div className="modalItems">
        {/*<button
          className="project-status"
          onClick={
            () =>
              this.props.changeProjectStatus(
                this.state.project.id,
                this.state.project.status
              ) ,
            this.setState({ project.status: this.props.currentProject.status })
          }
        >
          {this.state.project.status}
        </button> */}
        <form className="modalForm" onSubmit={this.handleSubmit}>
          <textarea
            className="createProjectField titel"
            name="title"
            type="text"
            placeholder="Titel"
            onChange={this.handleChange}
            value={this.state.project ? this.state.project.title : ""}
            readOnly={this.props.modalState === "view"}
          />
          <textarea
            className="createProjectField description"
            name="description"
            type="text"
            placeholder="Beskrivning, kontaktuppgifter"
            onChange={this.handleChange}
            value={this.state.project ? this.state.project.description : ""}
            readOnly={this.props.modalState === "view"}
          />
          {this.props.modalState !== "view" && <input type="submit" />}
        </form>
        {this.props.modalState !== "create" && (
          <div>
            {this.props.modalState !== "edit" && (
              <button
                onClick={() =>
                  this.props.showModal("edit", this.props.currentProject)
                }
              >
                Edit
              </button>
            )}
            <div className="project-delete">
              <button
                onClick={() =>
                  this.props.deleteProject(this.props.currentProject.id)
                }
              >
                <i className="fa fa-trash" />
              </button>
            </div>
          </div>
        )}
        <Projectstatus />
      </div>
    );
  }
}

export default ProjectDetail;
