import React, { Component } from 'react';
import Name from './Name.js';
import Age from "./Age.js";
import Reasons from "./Reasons.js";
import Teams from "./Teams.js";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameInput: "",
      ageInput: "",
      reasonsInput: "",
      teamsInput: "",
      name: [],
      age: [],
      reasons: [],
      teams: [],
      toggle: false,
      toggleAge: false,
      toggleButton: false
    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleNameClick = this.handleNameClick.bind(this);
    this.handleAgeChange = this.handleAgeChange.bind(this);
    this.handleAgeClick = this.handleAgeClick.bind(this);
    this.handleReasonChange = this.handleReasonChange.bind(this);
    this.handleReasonClick = this.handleReasonClick.bind(this);
    this.handleTeamsChange = this.handleTeamsChange.bind(this);
    this.handleTeamsClick = this.handleTeamsClick.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleNameChange(e) {
    this.setState({nameInput: e.target.value});
  }

  handleNameClick() {
    this.setState({name: [...this.state.name, this.state.nameInput], nameInput: "", toggle: !this.state.toggle});
  }

  handleAgeChange(e) {
    this.setState({ageInput: e.target.value});
  }

  handleAgeClick() {
    this.setState({age: [...this.state.age, this.state.ageInput], ageInput: "", toggleAge: !this.state.toggleAge});
  }

  handleReasonChange(e) {
    this.setState({reasonsInput: e.target.value});
  }

  handleReasonClick() {
    this.setState({reasons: [...this.state.reasons, this.state.reasonsInput], reasonsInput: ""});
  }

  handleTeamsChange(e) {
    this.setState({teamsInput: e.target.value});
  }

  handleTeamsClick() {
    this.setState({teams: [...this.state.teams, this.state.teamsInput], teamsInput: ""})
  }

  handleButtonClick() {
    alert("Your soul now belongs to Stan Kroenke")
    this.setState({nameInput: "", ageInput: "", reasonsInput: "", teamsInput: "", name: [], age: [], reasons: [], teams: [], toggle: false, toggleAge: false, toggleButton: !this.state.toggleButton})
  }

  render() {
    return (
      <div className="App">
        <h1>Los Angeles Rams Bandwagon Form</h1>
        <Name
          nameInput={this.handleNameChange}
          name={this.state.nameInput} 
          handleName={this.handleNameClick}
          toggleVal={this.state.toggle}
        />
        { this.state.name }
        <Age
          age={this.state.ageInput}
          ageInput={this.handleAgeChange}
          handleAge={this.handleAgeClick}
          toggle={this.state.toggleAge}
        /> 
        { this.state.age }
        <Reasons 
          reason={this.state.reasonsInput}
          reasonList={this.state.reasons}
          typeReason={this.handleReasonChange}
          addReason={this.handleReasonClick}
        />
        <Teams
          team={this.state.teamsInput}
          teamList={this.state.teams}
          inputTeam={this.handleTeamsChange}
          addTeam={this.handleTeamsClick}
        />
        <div>Bandwagon History:</div>
        <form>
          <input type="checkbox" />2017 Eagles<br></br>
          <input type="checkbox" />Brady era Patriots<br></br>
          <input type="checkbox" />Legion of Boom Seahawks<br></br>
          <input type="checkbox" />Peyton Manning led Broncos<br></br>
        </form>
        <button id="finalButton" onClick={this.handleButtonClick} >Submit Bandwagon Application</button>
      </div>
    );
  }
}

export default App;
