import Mini from "./mini/mini.js";
import Home from "./pages/Home.js";
import List from "./pages/List.js";
import SayHi from "./pages/SayHi.js";
import New from "./pages/New.js";

const routes = {
  "": Home,
  home: Home,
  list: List,
  new: New,
  sayhi: SayHi,
};

// let { pathname } = window.location;
// pathname = pathname.slice(1);
// console.log(pathname);
// Mini.render(
//   pathname ? routes[pathname] : routes[""],
//   document.getElementById("mini")
// );
// // Mini.render(Home, document.getElementById("mini"));
export default routes;

export function renderPage(pathname) {
  const app = document.getElementById("mini");
  switch (pathname) {
    case "/":
      Mini.render(Home, document.getElementById("mini"));
      break;
    case "/about":
      app.innerHTML = "<h1>About</h1>";
      break;
    default:
      app.innerHTML = "<h1>404 Not Found</h1>";
  }
}

renderPage(window.location.pathname);

window.addEventListener("popstate", () => {
  console.log("holloooo");
});
