import React from "react";
import { Link } from "react-router-dom";
const baseClass = "page-navigation";

export const Navigation = () => (
  <header>
    <Link to="/" className="page-heading">
      <img
        className={`${baseClass}-logo`}
        src="https://react-router-project.d4vecarter.now.sh/spotifyLogo.png"
      />
      <h1>Explorer</h1>
    </Link>
    <nav>
      <ul className={baseClass}>
        <li className={`${baseClass}-item`}>
          <Link to="/new-releases">New releases</Link>
        </li>
        <li className={`${baseClass}-item`}>
          <Link to="/categories">Categories</Link>
        </li>
      </ul>
    </nav>
  </header>
);
