import React from "react";
import "../css/nav.css";

function Nav() {
  return (
    <nav>
      <div className="logo"></div>
      <ul>
        <li>
          <a href="https://github.com/ArmanArm4/chess" target="_blank">
            GitHub
          </a>
        </li>

        <li>
          <a href="https://armmat.dev/" target="_blank">
            armmat.com
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
