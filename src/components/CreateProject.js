import React, { Component } from "react";

class CreateProject extends Component {
  handleChange = this.handleChange.bind(this);
  handleSubmit = this.handleSubmit.bind(this);
  resetFields = this.resetFields.bind(this);

  state = {
    title: "",
    description: "",
    status: "Ej påbörjad"
  };

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState(
      () => {
        this.props.createProject(this.state);
        this.resetFields();
      }
    );
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
            name="title"
            type="text"
            placeholder="Titel"
            onChange={this.handleChange}
            value={this.state.title}
          />
          <input
            name="description"
            type="text"
            placeholder="Beskrivning"
            onChange={this.handleChange}
            value={this.state.description}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default CreateProject;
