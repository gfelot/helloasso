import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="hero-head">
        <nav className="navbar">
          <div className="container">
            <div className="navbar-brand">
              <a className="navbar-item">
                <img
                  src="https://www.helloasso.com/Areas/HelloAsso/docs/helloasso-logo-couleurs-2015.png"
                  alt="Logo"
                />
              </a>
              <span
                className="navbar-burger burger"
                data-target="navbarMenuHeroA"
              >
                <span />
                <span />
                <span />
              </span>
            </div>
            {/* <div id="navbarMenuHeroA" className="navbar-menu">
              <div className="navbar-end">
                <a className="navbar-item is-active">Home</a>
                <a className="navbar-item">Examples</a>
                <a className="navbar-item">Documentation</a>
                <span className="navbar-item">
                  <a className="button is-primary is-inverted">
                    <span className="icon">
                      <i className="fab fa-github" />
                    </span>
                    <span>Download</span>
                  </a>
                </span>
              </div>
            </div> */}
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
