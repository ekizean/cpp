import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        {/* <img src="C.png" alt="claremont" className="claremont-pic" /> */}
        <div className="pics">
          {<img src="Claremont.png" alt="Claremont" className="claremontpic" />}
          {<img src="CPP.png" alt="cpp.png" className="reactstuganpic" />}
        </div>
      </div>
    );
  }
}

export default Footer;
