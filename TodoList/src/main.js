import Mini from "../Mini/lib";
import HelloWorld from "./pages/HelloWorld";
import SayMyName from "./pages/SayMyName";
import State from "./pages/State";
import "./style.css";

function Main() {
  return (
    <>
      <Mini.Routes path="*" element={HelloWorld} />
      <Mini.Routes path="/saymyname/:name" element={SayMyName} />
      <Mini.Routes path="/state" element={State} />
    </>
  );
}

Mini.render(<Main />, document.getElementById("app"));
