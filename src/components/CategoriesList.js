import React, { useEffect, useState } from "react";
import { client, SPOTIFY_API } from "../domain/spotify";

export const CategoriesList = () => {
  const { categories_url, country, locale, limit, offset } = SPOTIFY_API;
  const [categoriesList, setCategoriesList] = useState([]);
  useEffect(() => {
    const categoriesListUrl = `${categories_url}?country=${country}&locale=${locale}&limit=${limit}&offset=${offset}`;
    client(categoriesListUrl)
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
