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
        list: {},
        hidden: true,
        first: "",
        last: "",
        age: "",
      },
      education: {
        list: [],
        hidden: true,
        school: "",
        from: "",
        to: "",
        degree: "",
      },
      experience: {
        list: [],
        hidden: true,
        company: "",
        from: "",
        to: "",
        position: "",
      },
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.hideUnhide = this.hideUnhide.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  hideUnhide(event) {
    const { name } = event.target;
    const currState = this.state[name];
    if (currState.hidden === true) {
      currState.hidden = false;
    }
    this.setState({[name]: currState})
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name } = event.target;
    const currState = this.state[name];
    let newListItem = {};
    let newList = [];
    for (const [key, value] of Object.entries(currState)) {
      newListItem[key] = value;
    }
    delete newListItem.list;
    if (name === "general") {
      newList = newListItem;
    } else {
      newList = currState.list.map((a) => a);
      newList.push(newListItem);
    }
    currState.hidden = true;
    currState.list = newList;
    this.setState({ [name]: currState });
    event.target.reset();
  }

  handleChange(event) {
    const { name, value } = event.target;
    const [name1, name2] = name.split(" ");
    const currState = this.state[name1];
    currState[name2] = value;
    this.setState({ [name1]: currState });
  }

  handleCancel(event) {
    const { name } = event.target;
    const currState = this.state[name];
    currState.hidden = true;
    this.setState({name: currState});
    event.target.parentElement.reset();

  }

  render() {
    const { general, education, experience } = this.state;
    return (
      <div id="return">
        <Header hideUnhide={this.hideUnhide} />
        {this.state.general.hidden === false &&
          <General
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
          />
        }
        <Education
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          hidden={this.state.education.hidden}
        />
        <Experience
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          handleCancel={this.handleCancel}
          hidden={this.state.experience.hidden}
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
