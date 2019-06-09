import React from "react";
import { Link } from "react-router-dom";

export const Navigation = () => (
  <nav>
    <ul className="page-navigation">
      <li className="page-navigation-item">
        <Link to="/">New releases</Link>
      </li>
      <li className="page-navigation-item">
        <Link to="/categories">Categories list</Link>
      </li>
    </ul>
  </nav>
);
