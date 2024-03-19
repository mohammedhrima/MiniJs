import Mini from "../../Mini/lib";

function Component() {
  const [value1, setValue1] = Mini.MiniValue(1);
//   const { get: value2, set: setValue2 } = new Mini.Variable(1);

  const handleClique = (e) => {
    e.preventDefault();
    setValue1(value1() + 1);
    // setValue2(value2() + 1);
  };

  return (
    <div className="Component">
      <h1>{value1()}</h1>
      {/* <h1>{value2()}</h1> */}
      <button onclick={handleClique}>Clique me</button>
    </div>
  );
}

export default Component;
