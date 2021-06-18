import React from "react";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <a href="/">
          <li>HOME</li>
        </a>
        <a href="/users_list">
          <li>USERS</li>
        </a>
        <a href="/add_user">
          <li>ADD USER</li>
        </a>
      </ul>
    </nav>
  );
};

export default Navbar;
