import React from "react";
import Logo from '../../images/logo192.png';

function MyCard(props) {
    return (

            <div className="mycard" style={{ width: "200px", marginLeft: "12px", marginTop: "5px", border: '1px solid #000', borderRadius: 6, background: '#fff' }} >
                <img src={props.image || Logo} style={{ width: "50%" }} className="card-img-top" alt={props.title || 'card image'} />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.text}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
    );
}

export default MyCard;