import React, { Component } from 'react';

class CreateProject extends Component {
    handleChange = this.handleChange.bind(this);
    handleSubmit = this.handleSubmit.bind(this);

    state = { 
        title: "",
        description: "",
        status: "Ej påbörjad"
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.createProject(this.state)
    }

    render() {
        return (
            <div>
                Create project stuff
                <form onSubmit={this.handleSubmit}>
                    <input name="title" type="text" placeholder="Titel" onChange={this.handleChange}/>
                    <input name="description" type="text" placeholder="Beskrivning" onChange={this.handleChange}/>
                    <input type="submit" />
                </form>
            </div>
        );
    }
}

export default CreateProject;