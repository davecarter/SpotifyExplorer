import React from "react";
import { Link } from "react-router-dom";

const baseClass = "newReleases";

export const NewReleasesItem = ({ artist, cover }) => (
  <div className={baseClass}>
    <h3>{artist}</h3>
    <Link to={`/album/${artist}`}>
      <img className={`${baseClass}-item`} src={cover} />
    </Link>
  </div>
);
