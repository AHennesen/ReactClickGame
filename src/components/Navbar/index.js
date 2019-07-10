import React from "react";
import './style.css';

function Navbar(props) {
  return (
    <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <h1 className="navbar-item title has-text-white">Know Your Art Game</h1>
      </div>
      <div className="navbar-end">
        <h1 className="navbar-item title has-text-white">Score: {props.score}</h1>
      </div>
    </nav>
  );
}

export default Navbar;