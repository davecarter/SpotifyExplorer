import React from "react";
import { Navigation } from "./Navigation";
import { HomePage } from "./HomePage";
import { NewReleasesList } from "./NewReleasesList";
import { CategoriesList } from "./CategoriesList";
import { CategoryPage } from "./CategoryPage";
import { ArtistPage } from "./ArtistPage";
import { Route } from "react-router-dom";

export const App = () => {
  return (
    <main>
      <Navigation />
      <section className="page-layout">
        <Route path="/" exact component={HomePage} />
        <Route path="/new-releases" component={NewReleasesList} />
        <Route path="/categories" exact component={CategoriesList} />
        <Route path="/category/:id" component={CategoryPage} />
        <Route
          path="/album/:artist/:idArtist"
          render={router => {
            const { artist, idArtist } = router.match.params;
            return <ArtistPage artist={artist} idArtist={idArtist} />;
          }}
        />
      </section>
    </main>
  );
};
