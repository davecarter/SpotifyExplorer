import React, { useEffect, useState } from "react";
import { SPOTIFY_API } from "../config.js";

export const NewReleases = () => {
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

  const renderCats = () => {
    console.log("rendered", newReleases);
    return newReleases.map(item => <img src={item.images[0].url} />);
  };

  return renderCats();
};
