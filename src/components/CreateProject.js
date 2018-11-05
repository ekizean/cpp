import React, { Component } from 'react';

class CreateProject extends Component {
    render() {
        return (
            <div>
                Create project stuff
                <form>
                    <input type="text" placeholder="Titel"/>
                    <input type="text" placeholder="Beskrivning"/>
                    <input type="submit" onSubmit={}/>
                </form>
            </div>
        );
    }
}

export default CreateProject;