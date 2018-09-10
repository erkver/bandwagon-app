import React,{ Component } from "react";

class Reasons extends Component {
    render() {
        let newReason = this.props.reasonList
        .map((e, i) => {
            return (<div key={i}>{ e }</div>)
        });
        return(
            <div>
                <div>Reason for leaving previous team:</div>
                <input type="text" placeholder="Here for the Superteam" value={this.props.reason} onChange={this.props.typeReason}/>
                <button onClick={this.props.addReason}>Submit</button>
                <h3>{ newReason }</h3>
            </div>
        );
    }
}

export default Reasons;