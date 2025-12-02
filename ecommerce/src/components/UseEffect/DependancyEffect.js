import React, { useState, useEffect } from "react";
import CardEffect from "../UseEffect/cardEffect.js";

function DependencyEffect() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");
    const [log, setLog] = useState([]);



    useEffect(() => {
        setLog((old) => [
            ...old,
            `tigger points lits: ${count}, name: ${name}`
        ]);
        console.log("DependencyEffect useEffect triggered");
    }, [count, name]);


    return (
        <CardEffect title="Dependency Effect Demo (useEffect with [count, name])">

            <div >
                <p >Count Value: {count}</p>
                <button onClick={() => setCount(count + 1)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md"
                >
                    Increase Count
                </button>
            </div>



            <div className="mb-6">
                <p className="text-lg mb-2">Enter Name:</p>
                <input
                    className="border p-2 rounded w-full"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Type your name..."
                />
            </div>



            <div className="bg-gray-100 rounded-lg p-3 max-h-64 overflow-auto text-sm">
                <h3 className="font-medium mb-2">useEffect Trigger Log:</h3>
                {log.length === 0 && <p>No triggers yet...</p>}
                {log.map((line, index) => (
                    <p key={index}> {line}</p>
                ))}
            </div>


            <p className="mt-4 text-gray-600 text-sm">
                useEffect runs ONLY when <b>count</b> or <b>name</b> changes.
            </p>
        </CardEffect>
    );
}

export default DependencyEffect;