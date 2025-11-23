import { React, useState } from "react";


function Show() {
    const [name, setName] = useState("");
    //const [mail, setMail] = useState("");

    const pattern = /^[a-zA-Z]/;




    return (
        <div>
            <input
                placeholder="enter full name"
                value={name}
                onChange={
                    (e) => pattern.test(e.target.value) ? setName(e.target.value) : alert("please enter valid user name")
                }
            /> 
            <h3>Your name is: {name}</h3>   
        </div>
    )
}

export default Show;