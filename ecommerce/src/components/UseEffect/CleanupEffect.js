import React, { useState, useEffect } from "react";


function CleanupEffect() {
    const [seconds, setSeconds] = useState(0);
    const [width, setWidth] = useState(window.innerWidth);
    const [showChild, setShowChild] = useState(true);


    useEffect(() => {
        console.log("[IntervalEffect] mount -> start interval");

        const id = setInterval(() => {

            setSeconds(s => s + 1);
        }, 1000);


        return () => {
            clearInterval(id);
            console.log("[IntervalEffect] cleanup -> interval cleared");
        };
    }, []);

    useEffect(() => {
        console.log("[ResizeEffect] mount -> adding resize listener");

        const onResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener("resize", onResize);

        return () => {
            window.removeEventListener("resize", onResize);
            console.log("[ResizeEffect] cleanup -> listener removed");
        };
    }, []); // run once on mount

    return (
        <div style={{
            fontFamily: "system-ui, Arial",
            maxWidth: 760,
            margin: "40px auto",
            padding: 20,
            background: "#fff",
            borderRadius: 12,
            boxShadow: "0 8px 30px rgba(0,0,0,0.06)"
        }}>
            <h1 style={{ marginTop: 0 }}>Cleanup Effect Demo</h1>

            <section style={{ marginBottom: 18 }}>
                <strong>Interval seconds:</strong>
                <div style={{ fontSize: 28, marginTop: 8 }}>{seconds}s</div>
                <small style={{ color: "#6b7280" }}>Interval started on mount — cleared on unmount.</small>
            </section>

            <section style={{ marginBottom: 18 }}>
                <strong>Window width:</strong>
                <div style={{ fontSize: 18, marginTop: 8 }}>{width}px</div>
                <small style={{ color: "#6b7280" }}>Resize listener added on mount — removed on cleanup.</small>
            </section>

            <section style={{ marginBottom: 18 }}>
                <button
                    onClick={() => setShowChild(s => !s)}
                    style={{
                        padding: "10px 14px",
                        borderRadius: 8,
                        border: "none",
                        background: "#2563eb",
                        color: "#fff",
                        cursor: "pointer"
                    }}
                >
                    {showChild ? "Unmount Child (run its cleanup)" : "Mount Child"}
                </button>
            </section>

            <section>
                {showChild && <ChildWithCleanup />}
            </section>
        </div>
    );
}

function ChildWithCleanup() {
    useEffect(() => {
        console.log("[Child] mounted");

        return () => {

            console.log("[Child] unmounted -> cleanup run");
        };
    }, []);
    return (
        <div style={{
            marginTop: 16,
            padding: 12,
            borderRadius: 8,
            background: "#f1f5f9"
        }}>
            <p style={{ margin: 0 }}>I am a child component. Unmount me to see child cleanup in console.</p>
        </div>
    );
}

export default CleanupEffect;