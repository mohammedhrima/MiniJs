class Variable {
  constructor(initialState) {
    this._state = initialState;
    this._prevState = initialState;
  }

  set state(newState) {
    this._prevState = this._state;
    this._state = newState;
  }

  get set() {
    return (newValue) => {
      this.state = newValue;
    };
  }
  get get() {
    return () => this._state;
  }

  get prevState() {
    return this._prevState;
  }
}

// Example usage
const countVariable = new Variable(0);

const { get: value, set: Setvalue } = new Variable(0);

Setvalue(10);
console.log("hey: ", value());

console.log("Current state after assignment:", value());

document.getElementById("btn").onclick = () => {
  console.log("Count: ", value());
  Setvalue(value() + 1);
};
