import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="nav">
      <Link to="/" className="nav__home">
        Home
      </Link>
    </div>
  );
}

export default Navigation;
