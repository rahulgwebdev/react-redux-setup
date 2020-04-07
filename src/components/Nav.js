import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <header>
      <nav>
        <h2>Logo</h2>
        <ul>
          <li>
            <Link to={"/home"}>Home</Link>
          </li>
          <li>
            <Link to={"/addpost"}>Add Post</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/signup"}>Sign up</Link>
          </li>
          <li>
            <Link to={"/signin"}>Sign in</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
