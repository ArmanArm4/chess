import React from "react";
import "../css/nav.css";

function Nav() {
  return (
    <nav>
      <div className="logo"></div>
      <ul>
        <li>
          <a>GitHub</a>
        </li>
        <li>
          <a>Online</a>
        </li>
        <li>
          <a>armanportfolio.com</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
