import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./NavBar.scss";
import Button from "../Button/Button";

export default class Navbar extends Component {
  state = {
    isOpen: false,
  };

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <header className="nav-container">
        <div className="logo-container">
          <h2 className="logo-text">
            <Link to="/">realHousey</Link>
          </h2>
        </div>
        {/* {this.state.isOpen ? (
          <div></div>
        ) : (
          <div className="logo-container">
            <h2 className="logo-text">
              <Link to="/">realAbode</Link>
            </h2>
          </div>  
        )} */}

        <div className="nav-container">
          <nav className={this.state.isOpen ? "nav-links open" : "nav-links"}>
            {/* <li ref={linksRef}> */}
            <li className={this.state.isOpen ? "fade fade1" : "nav-li"}>
              <Link className="link" to="/houses">
                Buy
              </Link>
            </li>
            {/* <li className={this.state.isOpen ? "fade" : ""}>
            <Link className="link" to="/rent">
              Rent
            </Link>
          </li> */}
            <li className={this.state.isOpen ? "fade" : "nav-li"}>
              <Link className="link" to="/sell">
                Sell
              </Link>
            </li>
            <li className={this.state.isOpen ? "fade" : "nav-li"}>
              <Link className="link" to="/homeloans">
                Home Loans
              </Link>
            </li>
            <li className={this.state.isOpen ? "fade" : "nav-li"}>
              <Link className="link" to="/agentfinder">
                Agent Finder
              </Link>
            </li>
          </nav>

          <div
            className={this.state.isOpen ? "burger open-burger" : "burger"}
            onClick={this.handleToggle}
          >
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="button">
              <Link to="/sell">
                <Button btn="btn2">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
