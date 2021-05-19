function Education(props) {
  return (
    <form
      id="education-form"
      className={props.hidden === true ? "hidden" : "form"}
      onSubmit={props.handleSubmit}
      onChange={props.handleChange}
      name="education"
    >
      <div>
        <label htmlFor="education school">School: </label>
        <input type="text" name="education school" id="school-input" />
      </div>
      <div>
        <label htmlFor="education from">From: </label>
        <input type="text" name="education from" id="from-input" />
      </div>
      <div>
        <label htmlFor="education to">To: </label>
        <input type="text" name="education to" id="to-input" />
      </div>
      <div>
        <label htmlFor="education degree">Degree: </label>
        <input type="text" name="education degree" id="degree-input" />
      </div>
      <button type="submit">save</button>
    </form>
  );
}

export default Education;
