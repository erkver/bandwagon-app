import React from "react";

const Age = props => {
    return(
        <div>
            <form>
                <label>
                    Age: 
                    {props.toggle === false ? <input type="number" min="10" max="100" onChange={props.ageInput} placeholder="10-100" /> : <h3>{ props.age }</h3>}
                </label>
            </form>
            <button onClick={props.handleAge} onClick={props.toggleAge}>Submit</button>
        </div>
    )
}

export default Age;