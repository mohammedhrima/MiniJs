import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import "./App.css";

function Component({ name }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Component ${name} is called`);
  }, [count]);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>clique me</button>
    </>
  );
}

function App() {
  return (
    <>
      <a href="https://www.google.com">navigate</a>
      <Component name={1} />
      <Component name={2} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
