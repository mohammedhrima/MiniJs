import routes from "../main";
import Mini from "../mini/mini";

const Home2 = () => {
  const [getB, setB] = Mini.useState(0);
  const handle = () => {
    setB(getB + 1);
  };

  return (
    <div style={{ backgroundColor: "red"}}>
      <h2>A: {getB}</h2>
      <button onclick={handle}>clique me A</button>
    </div>
  );
};

const Home = () => {
  const [getA, setA] = Mini.useState(0);

  const handle = () => {
    setA(getA + 1);
  };

  return (
    <div>
      <h2>A: {getA}</h2>
      <button onclick={handle}>clique me A</button>
      <Home2 />
    </div>
  );
};

export default Home;
