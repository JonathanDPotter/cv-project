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
      general: {
        list: [],
        first: "",
        last: "",
        age: "",
      },
      education: {
        list: [],
        school: "",
        to: "",
        from: "",
        degree: "",
      },
      experience: {
        list: [],
      },
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name } = event.target;
    const currState = this.state[name];
    let newListItem = {};
    let newList = currState.list.map((a) => a);
    [...event.target.elements].forEach((a) => {
      let itemName = a.name.split(" ")[1];
      newListItem[itemName] = a.value;
    });
    newList.push(newListItem);
    currState.list = newList;
    console.log(currState);
    this.setState({ [name]: currState });
  }

  handleChange(event) {
    const { name, value } = event.target;
    const [name1, name2] = name.split(" ");
    const currState = this.state[name1];
    currState[name2] = value;
    this.setState({ [name1]: currState });
    console.log(currState)
  }

  render() {
    const { general, education, experience } = this.state;
    return (
      <div id="return">
        <Header />
        <General
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        <Education
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        <Experience
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        <CeeVee
          education={education.list}
          general={general.list}
          experience={experience.list}
        />
      </div>
    );
  }
}

export default App;
