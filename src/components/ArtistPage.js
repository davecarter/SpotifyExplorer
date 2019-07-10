import React, { useEffect, useState } from "react";
import { client, SPOTIFY_API } from "../domain/spotify";
// import { artistMock } from "../domain/artistMock";

export const ArtistPage = ({ artist, idArtist }) => {
  const { artist_url } = SPOTIFY_API;
  const [artistImage, setArtistImage] = useState();
  useEffect(() => {
    const artistURL = `${artist_url}${idArtist}`;
    client(artistURL)
      .then(data => console.log(data) || setArtistImage(data.images))
      .catch(err => console.log(err));
    // setArtistImage(artistMock.images);
  }, []);

  return (
    <div>
      <h1>{artist}</h1>
      {artistImage && <img src={artistImage[0].url} />}
    </div>
  );
};
