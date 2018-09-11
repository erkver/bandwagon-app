import React from "react";

const Name = props => {
    return (
        <div>
            <form>
                <label>
                    Name: 
                    {props.toggleVal === false ? <input type="text" onChange={props.nameInput} placeholder="Full name" /> : <h3>{ props.name }</h3>}
                </label>
            </form>
            <button onClick={props.handleName}>Submit</button>
        </div>
    );
}

export default Name;