let h1 = document.getElementById("title");
let input = document.getElementById("input");

input.addEventListener("change", (event) => {
    console.log(event);
    h1.innerHTML = event.target.value;
});
