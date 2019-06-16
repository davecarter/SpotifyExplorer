import React, { useEffect, useState } from "react";
import { isLogged } from "../domain/spotify";

const baseClass = "homePage";

export const HomePage = ({ location }) => {
  const [logged, setLogged] = useState(false);
  useEffect(() => {
    setLogged(isLogged());
  }, []);

  return (
    <section className={baseClass}>
      <h2 className={`${baseClass}-subheading`}>React Router Platzi Course</h2>
      <p className={`${baseClass}-description`}>
        This application is an SPA made with ReactJS, React Router 5 and lots of
        💚. Browse Spotify categories, artists and new releases.
      </p>
      <p>Please login into Spotify:</p>

      {!logged ? <a href="/login">Login</a> : <h3>Logged In!</h3>}
    </section>
  );
};
