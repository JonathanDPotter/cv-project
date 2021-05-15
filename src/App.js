import React, { Component } from "react";
import General from "/home/jonathan/code/the_odin_project/cv-project/src/components/General.js";
import Header from "/home/jonathan/code/the_odin_project/cv-project/src/components/Header.js";
import Education from "/home/jonathan/code/the_odin_project/cv-project/src/components/Education.js";
import Experience from "/home/jonathan/code/the_odin_project/cv-project/src/components/Experience.js";
import CeeVee from "/home/jonathan/code/the_odin_project/cv-project/src/components/CeeVee.js";
import "./style.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      general: [],
      edList: [],
      edSchool: "",
      edFrom: "",
      edTo: "",
      edDegree: "",
      experience: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.edSchool);
  }

  handleChange(event) {
    const currState = this.state;
    const name = event.target.name;
    const value = event.target.value;
    currState[name] = value;
    this.setState({ [name]: currState[name] });
    console.table(this.state);
  }

  render() {
    const education = ["love", "my", "curves", 4];
    return (
      <div id="return">
        <Header />
        <General />
        <Education
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        <Experience />
        <CeeVee education={education} />
      </div>
    );
  }
}

export default App;
