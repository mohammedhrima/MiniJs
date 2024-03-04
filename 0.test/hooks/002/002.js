import React from "react";
import ReactDOM from "react-dom";

let firstWorkInProgressHook = { memoizedState: null, next: null };
let workInProgressHook;
function useState(initState) {
    let currentHook = workInProgressHook.next ? workInProgressHook.next : { memoizedState: initState, next: null };
    function setState(newState) {
        currentHook.memoizedState = newState;
        render();
    }
    
    if (workInProgressHook.next) {
        console.log(workInProgressHook);
        workInProgressHook = workInProgressHook.next;
    } else {
        workInProgressHook.next = currentHook;
        workInProgressHook = currentHook;
        console.log("firstWorkInProgressHook", firstWorkInProgressHook);
    }
    return [currentHook.memoizedState, setState];
}
function Counter() {
    const [name, setName] = useState("abc");
    const [number, setNumber] = useState(0);
    return (
        <>
            <p>
                {name}:{number}
            </p>
            <button onClick={() => setName("efg")}>clique me</button>

            <button onClick={() => setNumber(number + 1)}> + </button>
        </>
    );
}
function render() {
    workInProgressHook = firstWorkInProgressHook;
    ReactDOM.render(<Counter />, document.getElementById("root"));
}
render();
