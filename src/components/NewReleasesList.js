import React, { useEffect, useState } from "react";
import { SPOTIFY_API } from "../config.js";
import { NewReleasesItem } from "./NewReleasesItem.js";

export const NewReleasesList = () => {
  const { new_releases_url, authorization } = SPOTIFY_API;
  const [newReleases, setNewReleases] = useState([]);
  useEffect(() => {
    const newReleasesUrl = new_releases_url;
    fetch(newReleasesUrl, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: authorization
      }
    })
      .then(res => res.json())
      .then(data => setNewReleases(data.albums.items))
      .catch(err => console.log(err));
  }, []);

  return newReleases.map((item, id) => {
    const icon = item.images[0].url;
    const artist = item.artists[0].name;
    const idArtist = item.artists[0].id;
    console.log(item);
    return (
      <NewReleasesItem
        key={id}
        cover={icon}
        artist={artist}
        idArtist={idArtist}
      />
    );
  });
};
