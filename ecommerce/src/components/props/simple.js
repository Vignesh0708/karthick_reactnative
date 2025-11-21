import React from "react";
import Logo from '../../images/logo192.png';

function Simple(props) {

    const cardList = [
        {
            title: "karthick",
            text: "Some quick example text to build on the card title and make up the bulk of the card’s content."
        }]

    const cardsList = cardList.map((cardList) => <cardList title={cardList.title} text={cardList.text} />);


    return (
        <div className="card" style={{ width: "18rem" }} >
            <img src={Logo} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{cardList.title}</h5>
                <p className="card-text">{cardsList.text}</p>
                <a href="#" className="btn btn-primary">Go some</a>
            </div>
        </div >
    )
}


export default Simple;