import React from "react";
import Card from './card';

function Simple({ data }) {
    const dataList = [
        { id: 1, title: "karthick", text: "Some quick example text..." },
        { id: 2, title: "John", text: "Another example text for the second card." },
        { id: 3, title: "Sarah", text: "Yet another card example with different content." }
    ];

    const list = data || dataList;

    return (
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            {list.map(item => (
                <Card key={item.id} title={item.title} text={item.text} image={item.image} />
            ))}
        </div>
    );
}

export default Simple;
