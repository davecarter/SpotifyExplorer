import React from "react";
import { Link } from "react-router-dom";

const baseClass = "newReleases";

export const NewReleasesItem = ({
  album,
  artist,
  cover,
  idArtist,
  spotifyLink
}) => (
  <div className={baseClass}>
    <h2>
      {artist}: <span className={`${baseClass}-albumName`}>{album}</span>
    </h2>
    <a
      className={`${baseClass}-link`}
      href={spotifyLink}
    >{`Listen to ${artist} in Spotify`}</a>
    <Link to={`/album/${artist}/${idArtist}`}>
      <img className={`${baseClass}-item`} src={cover} />
    </Link>
  </div>
);
