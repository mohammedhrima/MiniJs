import Mini from "../mini.js";

function sayHi() {
    console.log("Hi");
}
const Child = () => {
    return <h1 type={"client"}>This is Child</h1>;
};

const home = () => {
    return (
        <div type={"server"} onclick={sayHi} style={{ height: "100px", backgroundColor: "red" }}>
            <Child />
            <h1>hello</h1>
        </div>
    );
};

export { home };

// document.querySelector("[${}='${}']");
