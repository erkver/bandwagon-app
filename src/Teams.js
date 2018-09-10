import React,{ Component } from "react";

class Teams extends Component {
    render() {
        let newTeam = this.props.teamList
        .map((e, i) => {
            return (<div key={i}>{ e }</div>)
        });
        return(
            <div>
                <div>Previous Teams(s):</div>
                <input type="text" placeholder="Patriots" value={this.props.team} onChange={this.props.inputTeam}/>
                <button onClick={this.props.addTeam}>Submit</button>
                <h3>{ newTeam }</h3>
            </div>
        );
    }
}

export default Teams;