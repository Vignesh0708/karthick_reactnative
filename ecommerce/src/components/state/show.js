import { React, useState } from "react";


function Show() {
    const [name, setName] = useState("");
    //const [mail, setMail] = useState("");
    const changeName = (e) => {
        const value = e.target.value;

        if (/^[a-zA-Z]*$/.test(value)) {
            setName(value);
        }
    }




    return (
        <div>
            <input
                placeholder="enter full name"
                value={name}
                onChange={changeName}
            />
            <h3>Your name is: {name}</h3>
        </div>
    )
}

export default Show;