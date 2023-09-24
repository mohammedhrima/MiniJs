import Mini from "../mini.js";

function sayHi() {
    console.log("Hi");
}
const Child = () => {
    return (
        <div type={"server"}>
            <h1>hello it's child</h1>
        </div>
    );
};

const home = () => {
    return (
        <div
            type={"server"}
            onclick={sayHi}
            style={{
                height: "100px",
                backgroundColor: "red",
            }}
        >
            {/* <Child /> */}
            <h1>hello</h1>
            <Child />
        </div>
    );
};

export { home };

// document.querySelector("[${}='${}']");
