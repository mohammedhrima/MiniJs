// esbuild.config.js
const esbuild = require("esbuild");
const cssModulesPlugin = require("esbuild-css-modules-plugin");
// Define esbuild configuration
esbuild
  .build({
    entryPoints: ["./src/main.js"], // Update with your entry file
    bundle: true,
    outfile: "static/index.js", // Output file name
    loader: {
      ...esbuild.defaultLoaders,
      ".js": "jsx",
    },
    jsxFactory: "Mini.createElement", // Specify the custom JSX pragma
    jsxFragment: "Mini.Fragment", // Optionally specify the fragment pragma
    plugins: [cssModulesPlugin()],
  })
  .catch(() => process.exit(1)); // Exit with error code if build fails
