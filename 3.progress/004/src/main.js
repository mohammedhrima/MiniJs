import Mini from "../Mini/lib";
import Home from "./pages/Home";
import List from "./pages/List";
import User from "./pages/User";

const app = document.getElementById("app");

function Main() {
  return (
    <>
      <Mini.Routes path="*" element={Home} />
      <Mini.Routes path="/home" element={Home} />
      <Mini.Routes path="/list" element={List} />
      <Mini.Routes path="/user/:name" element={User} />
    </>
  );
}

Mini.render(<Main />, app);
