import Mini from "../mini/mini";

const Home = () => {
    const [x, set] = Mini.useState(0);
    const [name, setName] = Mini.useState("abc");
    const [value, setValue] = Mini.useState("");
    return (
        <div>
            <h1>Hello {name} </h1>
            <h2>is h2: {x}</h2>
            <button
                onclick={() => {
                    console.log(x);
                    set(x + 1);
                    setName(name === "abc" ? "x" : "abc");
                }}
            >
                button
            </button>
            <input
                value={value}
                onchange={(e) => {
                    setValue(e.target.value);
                }}
            />
        </div>
    );
};

export default Home;
