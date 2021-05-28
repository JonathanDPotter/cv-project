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
        hidden: false,
        first: "",
        last: "",
        bio: "",
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
    this.editItem = this.editItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  // sets class of the form component to show it or not
  hideUnhide(event) {
    const { name } = event.target;
    const currState = { ...this.state[name] };
    if (currState.hidden === true) {
      currState.hidden = false;
    }
    this.setState({ [name]: currState });
  }

  // updates the appropriate list in state
  handleSubmit(event) {
    event.preventDefault();
    const { name } = event.target;
    let currState = { ...this.state[name] };
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
    if (name !== "general") {
      currState = this.clearNamedState(currState);
    }
    this.setState({ [name]: currState });
  }

  // gets form input and stores it in the appropriate state, the form then displays what is in state
  handleChange(event) {
    const { name, value } = event.target;
    const [name1, name2] = name.split(" ");
    const currState = { ...this.state[name1] };
    currState[name2] = value;
    this.setState({ [name1]: currState });
  }

  // closes form window without saving state
  handleCancel(event) {
    const { name } = event.target;
    let currState = { ...this.state[name] };
    if (name !== "general") {
      currState = this.clearNamedState(currState);
    }
    currState.hidden = true;
    this.setState({ [name]: currState });
  }

  // returns an object with all keys except list and hidden set as empty strings
  clearNamedState(namedState) {
    for (const key in namedState) {
      if (key !== "list" && key !== "hidden") {
        namedState[key] = "";
      }
    }
    return namedState;
  }

  // opens a form populated with the values stored is state for that display item
  editItem(event) {
    event.preventDefault();
    const target = event.target.parentNode.parentNode;
    const { key } = target.dataset;
    const { className } = target;
    const currState = { ...this.state[className] };
    const currItem = currState.list[key];
    for (let i in currItem) {
      if (i !== "list" && i !== "hidden") {
        currState[i] = currItem[i];
      }
    }
    currState.list.splice(key, 1);
    this.setState({ [className]: currState }, () =>
      this.hideUnhide({ target: { name: className } })
    );
    
  }

  removeItem(event) {
    event.preventDefault();
    const target = event.target.parentNode.parentNode;
    const { key } = target.dataset;
    const { className } = target;
    const currState = { ...this.state[className] };
    currState.list.splice(key, 1);
    this.setState({ [className]: currState });
  }

  render() {
    const { general, education, experience } = this.state;
    return (
      <div id="return">
        <Header hideUnhide={this.hideUnhide} />
        <General
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          handleCancel={this.handleCancel}
          genState={this.state.general}
        />
        <Education
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          handleCancel={this.handleCancel}
          edState={this.state.education}
        />
        <Experience
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          handleCancel={this.handleCancel}
          expState={this.state.experience}
        />
        <CeeVee
          education={education.list}
          general={general.list}
          experience={experience.list}
          editItem={this.editItem}
          removeItem={this.removeItem}
        />
      </div>
    );
  }
}

export default App;
