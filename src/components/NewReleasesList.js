import React, { useEffect, useState } from "react";
import { NewReleasesItem } from "./NewReleasesItem";
import { client, SPOTIFY_API } from "../domain/spotify";
// import { newReleasesMock } from "../domain/newReleasesMock";

export const NewReleasesList = () => {
  const { new_releases_url } = SPOTIFY_API;
  const [newReleases, setNewReleases] = useState([]);
  useEffect(() => {
    const newReleasesUrl = new_releases_url;
    client(newReleasesUrl)
      .then(data => setNewReleases(data.albums.items))
      .catch(err => console.log(err));
    // setNewReleases(newReleasesMock.albums.items);
  }, []);

  return newReleases.map((item, id) => {
    const icon = item.images[0].url;
    const artist = item.artists[0].name;
    const album = item.name;
    const spotifyLink = item.uri;
    const idArtist = item.artists[0].id;
    return (
      <NewReleasesItem
        key={id}
        cover={icon}
        artist={artist}
        album={album}
        idArtist={idArtist}
        spotifyLink={spotifyLink}
      />
    );
  });
};
