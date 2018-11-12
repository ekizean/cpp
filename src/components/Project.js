import React, { Component } from "react";
import Projectstatus from "./Projectstatus";

const Project = props => {
  return (
    <div className="Project">
      <h1>{props.title}</h1>
      <Projectstatus
        status={props.status}
        changeProjectStatus={props.changeProjectStatus}
        id={props.id}
      />
      <p>{props.description}</p>
      <button onClick={this.props.deleteProject}>Radera</button>
    </div>
  );
};

export default Project;
