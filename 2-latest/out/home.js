import Mini from "../mini.js";
function sayHi() {
    console.log("Hi");
}
const Child = () => {
    return Mini.createElement(
        "div",
        {
            type: "server",
        },
        Mini.createElement("h1", null, "hello it's child")
    );
};
const home = () => {
    return Mini.createElement(
        "div",
        {
            type: "server",
            onclick: sayHi,
            style: {
                height: "100px",
                backgroundColor: "red",
            },
        },
        Mini.createElement(Child, null)
    );
};
export { home };

// document.querySelector("[${}='${}']");
