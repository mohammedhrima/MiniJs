import Mini from "../../Mini/lib";
import "./styles/Home.css";

const Home = () => {
  // const [getA, setA] = Mini.useState(1);
  let x = new Mini.Variable(10);
  const handle = (e) => {
    console.log("X: ", x.get());
    x.set(x.get() + 1);
  };

  return (
    <div className="test">
      <h1>Value: {x}</h1>
      <button onclick={(e) => handle(e)}>clique me A</button>
    </div>
  );
};

export default Home;
