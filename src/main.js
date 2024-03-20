import Mini from "../Mini/lib";
import App from "./pages/App";
import "./style.css";

function Main() {
  return (
    <>
      <Mini.Routes path="*" element={App} />
    </>
  );
}

Mini.render(<Main />, document.getElementById("app"));
