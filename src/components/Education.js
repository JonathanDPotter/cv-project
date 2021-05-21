function Education(props) {
  return (
    <form
      id="education-form"
      className={props.edState.hidden === true ? "hidden" : "form"}
      onSubmit={props.handleSubmit}
      name="education"
    >
      <div>
        <label htmlFor="education school">School: </label>
        <input
          type="text"
          name="education school"
          id="school-input"
          onChange={props.handleChange}
          value={props.edState.school}
        />
      </div>
      <div>
        <label htmlFor="education from">From: </label>
        <input
          type="text"
          name="education from"
          id="from-input"
          onChange={props.handleChange}
          value={props.edState.from}
        />
      </div>
      <div>
        <label htmlFor="education to">To: </label>
        <input
          type="text"
          name="education to"
          id="to-input"
          onChange={props.handleChange}
          value={props.edState.to}
        />
      </div>
      <div>
        <label htmlFor="education degree">Degree: </label>
        <input
          type="text"
          name="education degree"
          id="degree-input"
          onChange={props.handleChange}
          value={props.edState.degree}
        />
      </div>
      <button type="reset" onClick={props.handleCancel} name="education">
        cancel
      </button>
      <button type="submit">save</button>
    </form>
  );
}

export default Education;
