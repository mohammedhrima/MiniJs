import Mini from "../mini.js";

const home = () => {
    return Mini.createElement("div", {
        type: "server",
        style: {
            backgroundColor: "red",
            height: "100px",
        },
        onclick: () => {
            console.log("sayHi");
        },
    });
};
export { home };

// document.querySelector("[${}='${}']");
