import React, { useEffect, useState } from "react";
import { SPOTIFY_API } from "../config.js";

export const NewReleasesArtist = ({ artist, idArtist }) => {
  const { artist_url, authorization } = SPOTIFY_API;
  const [artistImage, setArtistImage] = useState();
  useEffect(() => {
    const artistURL = `${artist_url}${idArtist}`;
    fetch(artistURL, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: authorization
      }
    })
      .then(res => res.json())
      .then(data => setArtistImage(data.images))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h1>{artist}</h1>
      {artistImage && <img src={artistImage[0].url} />}
    </div>
  );
};
