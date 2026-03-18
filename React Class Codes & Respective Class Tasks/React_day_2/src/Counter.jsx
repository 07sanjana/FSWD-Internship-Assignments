/*
Use state hook
components has states

syntax:
const [state, setState] = useState(initialValue)
state: current value of the state
setState: function to update the state
initialValue: initial value of the state

*/

import React, { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h2>Counter App</h2>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    );
}

export default Counter;
