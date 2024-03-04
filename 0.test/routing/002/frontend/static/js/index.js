import Dashboard from "./views/Dashboard.js";
import Posts from "./views/Posts.js";
import ViewPosts from "./views/ViewPosts.js";
import Settings from "./views/Settings.js";

const pathToRegex = (path) => {
  return new RegExp(
    "^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$"
  );
};

const getParams = (match) => {
  console.log(match);
  const values = match.result.slice(1);
  const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(
    (result) => result[1]
  );

  // console.log(Array.from(match.route.path.matchAll(/:(\w+)/g)));
  return Object.fromEntries(
    keys.map((key, i) => {
      return [key, values[i]];
    })
  );
};

const navigateTo = (url) => {
  // add to history
  history.pushState(null, null, url);
  router();
};

const router = async () => {
  // console.log(pathToRegex("/posts/:id"));
  const routes = [
    { path: "/", view: Dashboard },
    { path: "/posts", view: Posts },
    { path: "/posts/:id", view: ViewPosts },
    { path: "/settings", view: Settings },
  ];

  // Test routes
  const matches = routes.map((route) => {
    return {
      route: route,
      result: location.pathname.match(pathToRegex(route.path)),
    };
  });
  // find the matche object for the current route
  let match = matches.find((elem) => elem.result !== null);
  if (!match) {
    // if route doesn't exists
    match = {
      route: routes[0],
      result: [location.pathname],
    };
  }
  const view = new match.route.view(getParams(match));
  document.querySelector("#app").innerHTML = await view.getHtml();
};

// when going back and forward
window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (event) => {
    // to prevent page from being reloaded
    // when clicking element that has [data-link]
    if (event.target.matches("[data-link]")) {
      event.preventDefault();
      navigateTo(event.target.href);
    }
  });
  router();
});
