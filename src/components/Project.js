import React, { Component } from "react";
import Projectstatus from "./Projectstatus";

const Project = props => {
  return (
    <div
      className="project"
      onClick={() => props.showModal("view", props.project)}
    >
      <h2>{props.project.title}</h2>
      {/* <Projectstatus
        status={props.project.status}
        changeProjectStatus={props.changeProjectStatus}
        id={props.project.id}
      /> */}
      <p className="project-description">{props.project.description}</p>
    </div>
  );
};

export default Project;
