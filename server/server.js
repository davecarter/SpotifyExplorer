import { createServer } from "http";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { App } from "../src/components/App";
import fs from "fs";
import path from "path";

createServer((req, res) => {
  // This context object contains the results of the render
  const context = {};

  const html = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );

  // context.url will contain the URL to redirect to if a <Redirect> was used
  if (context.url) {
    res.writeHead(302, {
      Location: context.url
    });
    res.end();
  } else {
    res.write(
      fs
        .readFileSync(path.join(__dirname, "..", "dist", "index.html"), "utf-8")
        .replace("<!--App-->", html)
    );
    res.end();
  }
}).listen(3000);
