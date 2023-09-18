import { useState, useEffect, useMemo } from "./React.js";

function Component({ propCount, buttonElem }) {
    const [count, setCount] = useState(0);
    const propCountDoubled = useMemo(()=>{
        console.log("in memo");
        return propCount * 2
    }, [propCount]);

    useEffect(() => {
        const handler = () => setCount(count + 1);
        buttonElem.addEventListener("click", handler);
        return () => buttonElem.removeEventListener("click", handler);
    }, [buttonElem]);

    // setTimeout(()=>{
    //     setCount(count + 1)
    // }, 1000)
    return `
    State: ${count}
    Prop: ${propCount}
    Prop Doubled: ${propCountDoubled}
    `;
}

export default Component;
