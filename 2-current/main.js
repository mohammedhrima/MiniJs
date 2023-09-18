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

let { pathname } = window.location;
pathname = pathname.slice(1);
console.log(pathname);
Mini?.refresh(pathname ? routes[pathname] : routes[""], document.getElementById("mini"));

export default routes;
