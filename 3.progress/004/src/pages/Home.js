import Mini from "../../Mini/lib";
import "./styles/Home.css";

const Home = () => {
  // const [getA, setA] = Mini.useState(1);
  let x = new Mini.Variable(10);
  const handle1 = (e) => {
    console.log("X: ", x);
    x.setValue(x.getValue() + 1);
  };

  // let y = new Mini.Variable(10);
  // const handle2 = (e) => {
  //   console.log("Y: ", y.getValue());
  //   y.setValue(y.getValue() - 1);
  // };

  return (
    <>
      <div className="test">
        <h1>Value1: {x}</h1>
        <button onclick={(e) => handle1(e)}>clique me 1</button>
      </div>
      {/* <div className="test">
        <h1>Value2: {y}</h1>
        <button onclick={(e) => handle2(e)}>clique me 2</button>
      </div> */}
    </>
  );
};

export default Home;
