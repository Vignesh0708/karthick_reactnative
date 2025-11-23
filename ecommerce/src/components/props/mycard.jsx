import React from "react";
import Logo from '../../images/logo192.png';

function MyCard({ title = 'Card title', text = '', image }) {
    return (
        <div className="mycard" style={{ width: 200, marginLeft: 12, marginTop: 5, border: '1px solid #000', borderRadius: 6, background: '#fff', boxSizing: 'border-box', paddingBottom: 12 }}>
            <img src={image || Logo} style={{ width: "50%", display: 'block', margin: '12px auto 0' }} className="card-img-top" alt={title} />
            <div className="card-body" style={{ padding: 12 }}>
                <h5 className="card-title" style={{ margin: '8px 0' }}>{title}</h5>
                <p className="card-text" style={{ margin: '8px 0' }}>{text}</p>
                <a href="#" className="btn btn-primary" onClick={(e) => e.preventDefault()} aria-label={`Open ${title}`}>Go somewhere</a>
            </div>
        </div>
    );
}

export default MyCard;
