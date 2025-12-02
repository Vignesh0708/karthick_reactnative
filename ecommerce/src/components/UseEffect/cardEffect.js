import React, { useEffect, useState, useRef, Children } from "react";


function CardEffect({ title, children }) {
    return (
        <div style={{
            background: "white",
            borderRadius: 12,
            padding: 16,
            boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
            marginBottom: 24

        }}>
            <h1>
                {title}
            </h1>
            <div>
                {children}
            </div>


        </div>
    )

}

export default CardEffect;