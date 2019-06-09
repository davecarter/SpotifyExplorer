import React from "react";
import { Navigation } from "./Navigation";
import { NewReleases } from "./NewReleases";
import { CategoriesList } from "./CategoriesList";
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
      <section>
        <Route path="/" exact component={NewReleases} />
        <Route path="/categories" component={CategoriesList} />
      </section>
    </main>
  </Router>
);
