import React from "react";
import "./join.css";

function JoinForm(){

    const collectMemberInfo = () => {
        
    }

    return (
        <div class="formContainer">
        <h1>Join the club !</h1>
            <form className="form" onSubmit={collectMemberInfo} >
                First name:<br/>
                <input type="text" name="firstname"/><br/>
                Last name:<br/>
                <input type="text" name="lastname"/><br/>
                Current Year:<br/>
                <input type="text" name="color" placeholder="Ex: 1st, 2nd, etc."/><br/>
                Email:<br/>
                <input type="text" name="food"/> <br/>
                <input type="submit" value="Submit" onClick={collectMemberInfo}/>
            </form>
      </div>
    );
}


export default JoinForm;