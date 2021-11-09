import { useState } from "react";
import Form from "./Form";
import Displaydata from "./Displaydata";

function Parent(){

    const [firstName, setFirstName] = useState("Billy");
    const [lastName, setLastName] = useState("LaRouso");

    function handleFirstNameChange (e){
        setFirstName(e.target.value)
        console.log(firstName)
    }

    function handleLastNameChange (e){
        setLastName(e.target.value)
    }


    return(
        <div>
            <Form firstName={firstName} lastName = {lastName} handleFirstNameChange={handleFirstNameChange} handleLastNameChange={handleLastNameChange}/>
            <Displaydata firstName={firstName} lastName={lastName}/>
        </div>
    )
}

export default Parent