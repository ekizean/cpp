import React from "react";

const Projectstatus = (props) => {
  return (
    <div className="Projectstatus">
      <button onClick={() => props.changeProjectStatus(props.id)}>{props.status}</button>
    </div>
  );
}

export default Projectstatus;
