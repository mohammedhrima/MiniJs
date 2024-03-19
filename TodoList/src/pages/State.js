import Mini from "../../Mini/lib";

function State() {
  let count = new Mini.Variable(0);
  const handleclique = () => {
    count.value += 1;
  };

  return (
    <div>
      <h1>
        count: <p>{count}</p>
      </h1>
      <button onclick={handleclique}>clique me</button>
    </div>
  );
}

export default State;
