import Mini from "../mini/mini";



const Home = () => {
  const [getA, setA] = Mini.useState(0);

  const handle = () => {
    setA(getA + 1);
  };
  return (
    <div>
      <h2>Home: {getA}</h2>
      <button onclick={handle}>clique me A</button>
    </div>
  );
};

export default Home;
