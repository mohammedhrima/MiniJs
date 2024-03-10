//  async.js
const fetch = require("node-fetch");

async function getData() {
  let res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  let json = await res.json();
  console.log("data", json);
}

getData();
