import React, { useEffect } from "react";

const LoggedIn = ({ location }) => {
  debugger; // eslint-disable-line
  useEffect(() => {
    const value = location.search;
    window.localStorage.setItem("search", value);
    console.log(location);
  }, []);

  return <h1>"Logged In"</h1>;
};

export { LoggedIn };
