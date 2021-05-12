import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <div class="nav">
      <Link to="/" class="nav__home">
        Home
      </Link>
      <Link to="/about" class="nav__about">
        About
      </Link>
    </div>
  );
}

export default Navigation;
