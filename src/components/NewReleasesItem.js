import React from "react";
import { Link } from "react-router-dom";

const baseClass = "newReleases";

export const NewReleasesItem = ({ artist, cover, idArtist }) => (
  <div className={baseClass}>
    <h3>{artist}</h3>
    <Link to={`/album/${artist}/${idArtist}`}>
      <img className={`${baseClass}-item`} src={cover} />
    </Link>
  </div>
);
