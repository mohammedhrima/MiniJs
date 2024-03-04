// esbuild.config.js
const esbuild = require("esbuild");
const cssModulesPlugin = require("esbuild-css-modules-plugin");
const fs = require("fs");

// Define custom loader function for JPG files
function loadJpg(filePath) {
  // Read the JPG file as binary data
  const data = fs.readFileSync(filePath);
  // Convert binary data to base64 format
  const base64Data = Buffer.from(data).toString("base64");
  // Create a data URI for the JPG file
  const dataUri = `data:image/jpeg;base64,${base64Data}`;
  // Return the data URI
  return dataUri;
}

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
    plugins: [
      cssModulesPlugin(),
      {
        name: "jpg-loader",
        setup(build) {
          // Handle JPG files
          build.onLoad({ filter: /\.jpg$/ }, async (args) => {
            // Use the custom loader function to load JPG files
            return {
              contents: `export default "${loadJpg(args.path)}";`,
              loader: "js",
            };
          });
        },
      },
    ],
  })
  .catch(() => process.exit(1)); // Exit with error code if build fails
