import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="page-container">
          <h1>Projektportalen</h1>
          <form>
            <div className="searchContainer">
              <input
                className="searchInput"
                type="text"
                placeholder="Sök här..."
                autoFocus
              />
              <input className="searchButton" value="Sök" type="submit" />
            </div>
          </form>
          <button className="addButton" onClick={() => this.props.showModal("create")}>
            +
          </button>
        </div>
      </div>
    );
  }
}

export default Header;
