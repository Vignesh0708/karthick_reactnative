import React from "react";

export default function PropCard({ heading = 'Default Heading', description = 'Default Description', imgSrc }) {
    return (
        <div className="prop-card" style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px', width: '300px' }}>
            <img src={imgSrc || 'https://via.placeholder.com/150'} alt={heading} style={{ width: '100%', borderRadius: '8px' }} />
            <h3 style={{ marginTop: '12px' }}>{heading}</h3>
            <p>{description}</p>
        </div>
    );
}