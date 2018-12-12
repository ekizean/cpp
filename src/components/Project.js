import React, { Component } from "react";
import Projectstatus from "./Projectstatus";

const Project = props => {
  return (
    <div className="project">
      <h2>{props.project.title}</h2>
      <Projectstatus
        status={props.project.status}
        changeProjectStatus={props.changeProjectStatus}
        id={props.project.id}
      />
      <p className="project-description">{props.project.description}</p>
      <div class="project-delete">
        <button className="project-delete-button" onClick={() => props.deleteProject(props.project.id)}>
          <i className="fa fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default Project;
