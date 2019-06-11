require("@babel/register")({
  presets: ["@babel/preset-react"],
  plugins: ["@babel/plugin-transform-modules-commonjs"]
});
require("./server");
