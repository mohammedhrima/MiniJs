import Mini from "./mini";
import Home from "./pages/Home";

const SayHi = ({ name }) => {
    return <h1>Hi {name}</h1>;
};

const App = () => {
    return (
        <>
            <SayHi name={"mohammed"} />
            <Home />
        </>
    );
};

export default App;
