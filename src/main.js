import Mini from "../Mini/lib";
import App from "./pages/App";
import "./style.css"
const app = document.getElementById("app");
function Main() {
  return (
    <>
      <Mini.Routes path="*" element={App} />
    </>
  );
}

Mini.render(<Main />, app);
