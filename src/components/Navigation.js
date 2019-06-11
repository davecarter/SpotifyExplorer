import React from "react";
import { Link } from "react-router-dom";
const baseClass = "page-navigation";

export const Navigation = () => (
  <nav>
    <ul className={baseClass}>
      <img
        className={`${baseClass}-logo`}
        src={`${process.env.CDN}spotifyLogo.png`}
      />
      <li className={`${baseClass}-item`}>
        <Link to="/">New releases</Link>
      </li>
      <li className={`${baseClass}-item`}>
        <Link to="/categories">Categories list</Link>
      </li>
    </ul>
  </nav>
);
