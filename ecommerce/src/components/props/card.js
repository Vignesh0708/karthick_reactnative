import React from "react";
import Logo from '../../images/logo192.png';
import Bird from '../../images/tropical-macaw-perched-vibrant-feathers-focus-generated-by-ai.jpg';
function Card({ title = 'Title', text = '', image }) {

    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={image || Logo} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
                <a href="#" className="btn btn-primary" onClick={(e) => e.preventDefault()}>Go somewhere</a>
            </div>
        </div>
    );
}

export default Card;
