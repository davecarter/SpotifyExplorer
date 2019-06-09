import React from "react";
import { Navigation } from "./Navigation";
import { NewReleasesList } from "./NewReleasesList";
import { CategoriesList } from "./CategoriesList";
import { NewReleasesArtist } from "./NewReleasesArtist";
import { BrowserRouter as Router, Route } from "react-router-dom";

export const App = () => (
  <Router>
    <main>
      <header>
        <Navigation />
      </header>
      <section>
        <h1 className="page-heading">Spotify Explorer</h1>
      </section>
      <section className="page-layout">
        <Route path="/" exact component={NewReleasesList} />
        <Route path="/categories" component={CategoriesList} />
        <Route
          path="/album/:artist"
          render={router => {
            const { artist } = router.match.params;
            return <NewReleasesArtist artist={artist} />;
          }}
        />
      </section>
    </main>
  </Router>
);
