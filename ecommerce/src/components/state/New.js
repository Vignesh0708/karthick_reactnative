import React from "react";
import { useState, useEffect } from "react";


function New() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Count value changed:", count);
    }, [count]);


    return (
        <div style={{ backgroundColor: 'lightgray', padding: '20px', textAlign: 'center' }}>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)} style={{ padding: '10px 20px', fontSize: '16px' }}>
                Increment
            </button>
            <button onClick={() => setCount(
                count > 0 ? count - 1 : 0
            )} style={{ padding: '10px 20px', fontSize: '16px' }}>
                Decrement
            </button>
        </div>
    )

}

export default New;