import React, { Component } from "react";

class Projectstatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "Ej påbörjad"
    };
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(e) {
    this.setState(state => ({
      status: "Påbörjad"
    }));
  }

  render() {
    return (
      <div className="Projectstatus">
        <button onClick={this.handleOnClick}>{this.state.status}</button>
      </div>
    );
  }
}

export default Projectstatus;
