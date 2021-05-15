function Education(props) {
  return (
    <form id="education-form" className="form" onSubmit={props.handleSubmit}>
      <div>
        <label htmlFor="edSchool">School: </label>
        <input
          type="text"
          name="edSchool"
          id="school-input"
          onChange={props.handleChange}
        />
      </div>
      <div>
        <label htmlFor="edFrom">From: </label>
        <input
          type="text"
          name="edFrom"
          id="from-input"
          onChange={props.handleChange}
        />
      </div>
      <div>
        <label htmlFor="to">To: </label>
        <input
          type="text"
          name="edTo"
          id="to-input"
          onChange={props.handleChange}
        />
      </div>
      <div>
        <label htmlFor="degree">Degree: </label>
        <input
          type="text"
          name="edDegree"
          id="degree-input"
          onChange={props.handleChange}
        />
      </div>
      <button type="submit">save</button>
    </form>
  );
}

export default Education;
