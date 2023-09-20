import Mini from "../mini/mini";

const SayHi = ({ name }) => {
    console.log("say hi", name);
    return (
        <>
            <h3>SayHi {name}</h3>
        </>
    );
};

export default SayHi;
