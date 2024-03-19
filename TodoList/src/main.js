import Mini from "../Mini/lib";

function Tag() {
  let x = new Mini.Variable(10);
  return (
    <>
      <button
        onclick={() => {
          x.value += 1;
        }}
      >
        clique me
      </button>
      <h1>{x}</h1>
    </>
  );
}

function Main() {
  let x = new Mini.Variable(10);

  return (
    <>
      {/* <Mini.Routes path="*" element={() => <h1>this is main</h1>} /> */}
      <Mini.Routes
        path="*"
        element={() => (
          <>
            <Tag />
            <Tag />
          </>
        )}
      />
      {/* <Mini.Routes
        path="*"
        element={() => (
          <div>
            <button
              onclick={() => {
                x.value += 1;
              }}
            >
              clique me
            </button>
            <h1>{x}</h1>
          </div>
        )}
      /> */}
    </>
  );
}

Mini.render(<Main />, document.getElementById("app"));
