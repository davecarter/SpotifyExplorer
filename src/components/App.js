import React from "react";
import { Navigation } from "./Navigation";
import { HomePage } from "./HomePage";
import { NewReleasesList } from "./NewReleasesList";
import { CategoriesList } from "./CategoriesList";
import { NewReleasesArtist } from "./NewReleasesArtist";
import { Route } from "react-router-dom";

export const App = () => (
  <main>
    <header>
      <Navigation />
    </header>
    <section>
      <h1 className="page-heading">Spotify Explorer</h1>
    </section>
    <section className="page-layout">
      <Route path="/" exact component={HomePage} />
      <Route path="/new-releases" component={NewReleasesList} />
      <Route path="/categories" component={CategoriesList} />
      <Route
        path="/album/:artist/:idArtist"
        render={router => {
          const { artist, idArtist } = router.match.params;
          return <NewReleasesArtist artist={artist} idArtist={idArtist} />;
        }}
      />
    </section>
  </main>
);
