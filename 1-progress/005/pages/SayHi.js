import Mini from "../mini";

const SayHi = ({ name }) => {
    console.log("say hi", name);
    return (
        <>
            <h3>Hi {name}</h3>
        </>
    );
};

export default SayHi;
