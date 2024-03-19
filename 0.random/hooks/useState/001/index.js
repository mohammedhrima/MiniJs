import Component from "./Component.js";
import { render } from "./React.js";

let count = 0;

document.getElementById("btn-prop").addEventListener("click", () => {
  count++;
  renderComponent();
});

function renderComponent() {
  render(
    Component,
    { propCount: count, buttonElem: document.getElementById("btn-count-1") },
    document.getElementById("root")
  );
  render(
    Component,
    { propCount: count, buttonElem: document.getElementById("btn-count-2") },
    document.getElementById("root2")
  );
}

renderComponent();
