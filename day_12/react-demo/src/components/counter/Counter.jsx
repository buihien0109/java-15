import React, { useState } from "react";

// mounting
// updating
// unmounting
function Counter() {
    const [count, setCount] = useState(10);

    const decrement = () => {
        setCount(count - 1);
    };

    const increment = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <h1>Counter : {count}</h1>
            <button onClick={decrement}>Giảm</button>
            <button onClick={increment}>Tăng</button>

            {console.log("render")}
        </div>
    );
}

export default Counter;
