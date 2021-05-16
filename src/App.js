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
      },
      education: {
        list: [1],
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
    [...event.target.elements].forEach((a) => (newListItem[a.name] = a.value));
    newList.push(newListItem);
    currState.list = newList;
    this.setState({ [name]: currState });
    console.log(this.state);
  }

  handleChange(event) {
    const { name, value } = event.target;
    const [name1, name2] = name.split(" ");
    const currState = this.state[name1];
    currState[name2] = value;
    this.setState({ [name1]: currState });
  }

  render() {
    const { general, education, experience } = this.state;
    return (
      <div id="return">
        <Header />
        <General general={general} />
        <Education
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        <Experience experiene={experience} />
        <CeeVee education={education.list} />
      </div>
    );
  }
}

export default App;
