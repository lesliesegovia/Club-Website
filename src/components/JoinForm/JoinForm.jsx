import React from "react";
import "./join.css";


function JoinForm(){

    return (
            <form className="form">
                <input type="text" className="form-input" name="name" placeholder="Name"/><br/>
                <input type="text" className="form-input" name="year" placeholder="Ex: 1st, 2nd, etc."/><br/>
                <input type="text" className="form-input" name="email" placeholder="Email"/> <br/>
                <input type="submit" value="Submit" />
            </form>
    );
}


export default JoinForm;