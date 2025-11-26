import React, { useEffect, useState, useRef, Children } from "react";


function CardEffect({ title, children }) {
    return (
        <div style={{
            background: "yellow",
            borderRadius: 12,
            width: 200,
            height: 400,

        }}>
            <h1>
                {title}
            </h1>
            <div>
                {Children}
            </div>


        </div>
    )

}