import React, { useEffect, useState } from "react";

function MountFetch() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);

    useEffect(() => {
        console.log("[MountFetch] effect -> start simulated API call");
        const id = setTimeout(() => {
            setData({ msg: "Fetched greeting from fake API" });
            setLoading(false);
            console.log("[MountFetch] simulated API resolved");
        }, 10000);

        return () => {
            clearTimeout(id);
            console.log("[MountFetch] cleanup (unmount) -> timeout cleared");
        };
    }, []);

    return (
        <div style={{
            background: "white",
            borderRadius: 12,
            padding: 16,
            boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
            minHeight: 120
        }}>
            <h4 style={{ marginTop: 0 }}>Mount: simulated API fetch</h4>
            {loading ? <p>Loading...</p> : <p>{data.msg}</p>}
            <small style={{ color: "#666" }}>Runs once when component mounts.</small>
        </div>
    );
}


export default MountFetch;