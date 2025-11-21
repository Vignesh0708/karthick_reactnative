import React from "react";
import Logo from '../../images/logo192.png';

function Card(props) {
    return (
        <div className="card" style={{ width: "18rem" }} >
            <img src={Logo} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div >
    )
}

function Simple(props) {

    const cardList = [
        {
            title: "karthick",
            text: "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        {
            title: "John",
            text: "Another example text for the second card."
        },
        {
            title: "Sarah",
            text: "Yet another card example with different content."
        }
    ]

    const cardsList = cardList.map((card, index) => <Card key={index} title={card.title} text={card.text} />);


    return (
        <div>
            {cardsList}
        </div>
    )
}


export default Simple;