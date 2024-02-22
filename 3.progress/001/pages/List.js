import Mini from "../mini/mini";

const List = () => {
    const [name, setName] = Mini.useState("mohammed");
    function handle(event) {
        event.preventDefault()
        console.log(event.target.value);
        setName(event.target.value)
    }
    return (
        <div>
            <h1>hello it's {name}</h1>
            <input onchange={handle} />
            <button>clique me button</button>
            <a href="https://www.google.com/">clique me</a>
        </div>
    );
};

export default List;
