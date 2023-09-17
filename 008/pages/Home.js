import Mini from "../mini/mini";
import SayHi from "./SayHi";

const Update = ({ value }) => {
    console.log(value);
    value.setValue("abc");
    return <h2>calling update</h2>;
};

const Home = () => {
    let x = Mini.Global("mohammed");
    return (
        <div>
            <h2>Home page</h2>
            <Update value={x} />
            <SayHi name={x.getValue()} />
        </div>
    );
};

export default Home;
