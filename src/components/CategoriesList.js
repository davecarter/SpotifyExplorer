import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { client, SPOTIFY_API } from "../domain/spotify";
// import { categoriesMock } from "../domain/categoriesMock";

export const CategoriesList = () => {
  const { categories_url, country, locale, limit, offset } = SPOTIFY_API;
  const [categoriesList, setCategoriesList] = useState([]);
  useEffect(() => {
    const categoriesListUrl = `${categories_url}?country=${country}&locale=${locale}&limit=${limit}&offset=${offset}`;
    client(categoriesListUrl)
      .then(data => setCategoriesList(data.categories.items))
      .catch(err => console.log(err));
    // setCategoriesList(categoriesMock.categories.items);
  }, []);

  const renderCategoriesList = () => {
    return categoriesList.map(item => {
      const { icons, id, name } = item;
      return (
        <div className="categoryList-item">
          <h3>{name}</h3>
          <Link to={`/category/${id}`}>
            <img src={icons[0].url} />
          </Link>
        </div>
      );
    });
  };

  return renderCategoriesList();
};
