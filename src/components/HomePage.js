import React from "react";
import { Link } from "react-router-dom";

const baseClass = "homePage";

export const HomePage = ({ location }) => {
  const { hash } = location;
  const getToken = () => {
    window.location.href = "/login";
    console.log("LOGIN", hash);
    const access_token =
      hash.split("=") || console.log("ACCESSTOKEN", access_token);
  };

  return (
    <section className={baseClass}>
      <h2 className={`${baseClass}-subheading`}>React Router Platzi Course</h2>
      <p className={`${baseClass}-description`}>
        This application is an SPA made with ReactJS, React Router 5 and lots of
        💚.
      </p>
      <p>Please login into Spotify:</p>

      <button onClick={getToken}>LOGIN</button>
    </section>
  );
};
