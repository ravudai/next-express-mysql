import React, { Component } from "react";
import Link from "next/link";

class Navbar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="navbar navbar-expand navbar-dark bg-dark">
        <div className="collapse navbar-collapse">
          <div>
            <Link href="/">
              <a className="navbar-brand">Cognizant MIS</a>
            </Link>
          </div>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item m-2">
              <Link href="/">
                <a className="nav" title="Home Page">
                  Home
                </a>
              </Link>
            </li>
            <li className="nav-item m-2">
              <Link href="/about">
                <a className="nav" title="About Company">
                  About
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
