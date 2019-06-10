import React, { useEffect, useState } from "react";
import { SPOTIFY_API } from "../config.js";

export const CategoriesList = () => {
  const {
    categories_url,
    country,
    locale,
    limit,
    offset,
    authorization
  } = SPOTIFY_API;
  const [categoriesList, setCategoriesList] = useState([]);
  useEffect(() => {
    const categoriesListUrl = `${categories_url}?country=${country}&locale=${locale}&limit=${limit}&offset=${offset}`;
    fetch(categoriesListUrl, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: authorization
      }
    })
      .then(res => res.json())
      .then(data => setCategoriesList(data.categories.items))
      .catch(err => console.log(err));
  }, []);

  const renderCats = () => {
    return categoriesList.map(item => {
      return (
        <div className="categoryList-item">
          <img src={item.icons[0].url} />
        </div>
      );
    });
  };

  return renderCats();
};
