import Mini from "../mini/mini";

const Home2 = () => {
    const [getB, setB] = Mini.useState(0);
    const handle = () => {
      setB(getB + 1);
    };
  
    return (
      <div style={{ backgroundColor: "red" }}>
        <h2>Home2: A: {getB}</h2>
        <button onclick={handle}>clique me A</button>
      </div>
    );
  };

  export default Home2