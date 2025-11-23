import { React, useState } from "react";


function Show() {
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");

    const pattern = /^[a-zA-Z]/;




    return (
        <div>
            <input
                placeholder="enter full name"
                value={name}
                onChange={
                    (e) => name = pattern ? (alart = "please enter valid user name".setName(e.target.value))
                }
            />
        </div>
    )