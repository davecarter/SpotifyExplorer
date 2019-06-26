import React, { useEffect, useState } from "react";
import { client, SPOTIFY_API } from "../domain/spotify";
import { categoryMock } from "../domain/categoryMock";

export const CategoryPage = ({ match }) => {
  const [categoryImage, setCategoryImage] = useState("");
  const { categories_url } = SPOTIFY_API;
  const title = match.params.id.toUpperCase();
  const category_url = `${categories_url}/${match.params.id}`;
  console.log("URL", category_url);
  useEffect(() => {
    client(category_url).then(data => setCategoryImage(data.icons[0]));
  });
  return (
    <div className="categoryPage">
      <h1 className="categoryPage-title">{title}</h1>
      <img className="categoryPage-image" src={categoryImage.url} />
    </div>
  );
};
