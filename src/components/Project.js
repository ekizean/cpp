import React, { Component } from "react";
import Projectstatus from "./Projectstatus";

const Project = props => {
  return (
    <div className="Project">
      <h1>{props.project.title}</h1>
      <Projectstatus
        status={props.project.status}
        changeProjectStatus={props.changeProjectStatus}
        id={props.project.id}
      />
      <p>{props.project.description}</p>
      <button onClick={() => props.deleteProject(props.project.id)}>Radera</button>
    </div>
  );
};

export default Project;
