import React, { use } from "react";
import { useState, useEffect, useRef } from "react";
import CardEffect from "../UseEffect/cardEffect";

function MountFetch() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        console.log("[MountFetch] Component Mounted");

        const id = setTimeout(() => {
            setData({ msg: "Data fetched successfully" });
            setLoading(false);
            console.log("[MountFetch] Data fetched and state updated");
        }, 3000);


        return () => {
            clearTimeout(id);
            console.log("[MountFetch] Component Unmounted, timeout cleared");
        };
    }, []);
    return (
        <CardEffect title="Mount Fetch Example">
            {loading ? <p>Loading...</p> : <p>{data.msg}</p>}
            <small>this codes rus</small>
            <CardEffect />
            );

}
}
}

};
            export default MountFetch;


