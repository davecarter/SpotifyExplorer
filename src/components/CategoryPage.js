import React from "react";
import { SPOTIFY_API } from "../domain/spotify";
import { categoryMock } from "../domain/categoryMock";

export const CategoryPage = ({ match }) => {
  const { categories_url } = SPOTIFY_API;
  const title = match.params.id.toUpperCase();
  // {`${categories_url}/${match.params.id}`}
  return (
    <div className="categoryPage">
      <h1 className="categoryPage-title">{title}</h1>
      <img className="categoryPage-image" src={categoryMock.icons[0].url} />
    </div>
  );
};
