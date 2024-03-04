import Mini from "./mini/mini";
import New from "./pages/New";
import Home from "./pages/Home";
import Home2 from "./pages/Home2";

function Route(props) {
  // console.log("hey: ", props);
  // console.log("call route with props:", props);
  // if (!routingOK) throw Error("Unable routing to use Route please");
  // const app = document.getElementById("mini");
  // if (window.location.pathname == ParentPath + path) Mini.render(element, app);
  // check current location and get it from route object and render it
  // console.log("current: ", window.location.pathname);
  // console.log("render: ", Mini.routes);
  return <>{props}</>;
}

let previousPath = "";
function SetPath() {
  let currentPath = window.location.pathname;
  if (currentPath.startsWith("/")) {
    currentPath = currentPath.slice(1);
  }

  if (currentPath !== previousPath) {
    // console.log("The path has changed. This function is running.");
    previousPath = currentPath;
    // console.log("current: ", currentPath);
    console.log("render: ", Mini.routes);
    Mini.render(Mini.routes[currentPath], document.getElementById("mini"));
  }
}
setInterval(SetPath, 30);

function debug() {
  // console.log("debug: ", Mini.routes);
}

setInterval(debug, 1000);

function App() {
  return (
    <div>
      {/* <Route path={"new"} element={<h1>New tag</h1>}>
        <Route path={"homi"} element={<h2>Homi tag</h2>}></Route>
      </Route> */}
      <>
        <h1>hello</h1>
      </>
    </div>
  );
}

export default App;
