import React, { Component } from "react";

class ProjectDetail extends Component {
  handleChange = this.handleChange.bind(this);
  handleSubmit = this.handleSubmit.bind(this);
  resetFields = this.resetFields.bind(this);

  state = {
    status: "Ej påbörjad"
  };

  componentWillMount(){
    this.setState(
      {project:this.props.currentProject}
    );
  }

  handleChange(e) {
    let event = e.target
    this.setState((prevState) => ({
      project:{
        ...prevState.project,
        [event.name]: event.value}
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createProject(this.state.project);
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
      <div>
        Create project stuff
        <form onSubmit={this.handleSubmit}>
          <input
            className="createProjectField"
            name="title"
            type="text"
            placeholder="Titel"
            onChange={this.handleChange}
            value={this.state.project ? this.state.project.title : "" }
            readOnly={this.props.modalState == "view"}
          />
          <input
          className="createProjectField"
            name="description"
            type="text"
            placeholder="Beskrivning"
            onChange={this.handleChange}
            value={this.state.project ? this.state.project.description : ""}
            readOnly={this.props.modalState == "view"}
          />
          <input type="submit" />
        </form>
        <button onClick = {() => this.props.showModal("edit", this.props.currentProject)}>Edit</button>
      </div>
    );
  }
}

export default ProjectDetail;
