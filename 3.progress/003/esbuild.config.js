// esbuild.config.js
const esbuild = require("esbuild");

// Define esbuild configuration
esbuild
  .build({
    entryPoints: ["main.js"], // Update with your entry file
    bundle: true,
    outfile: "out.js", // Output file name
    loader: {
      ...esbuild.defaultLoaders,
      ".js": "jsx",
    },
    jsxFactory: "Mini.createElement", // Specify the custom JSX pragma
    jsxFragment: "Mini.Fragment", // Optionally specify the fragment pragma
    plugins: [],
  })
  .catch(() => process.exit(1)); // Exit with error code if build fails
