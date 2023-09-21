import Mini from "../mini.js";
function sayHi() {
    console.log("Hi");
}
const Child = () => {
    return Mini.createElement(
        "h1",
        {
            type: "client",
        },
        "This is Child"
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
        Mini.createElement(Child, null),
        Mini.createElement("h1", null, "hello")
    );
};
export { home };

// document.querySelector("[${}='${}']");
