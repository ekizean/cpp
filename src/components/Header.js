import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header">
        <div className="page-container">
          <h1>Claremont projektportal</h1>
          <form>
            <div className="searchContainer">
              <input
                className="searchInput"
                type="text"
                placeholder="Sök här..."
                autoFocus
                onChange={(e) => this.props.setSearch(e.target.value)}
              />
              <input className="searchButton" value="Sök" type="submit" />
            </div>
          </form>
          <button className="addButton" onClick={() => this.props.showModal("create")}>
            <span>+</span>
          </button>
        </div>
      </div>
    );
  }
}

export default Header;
