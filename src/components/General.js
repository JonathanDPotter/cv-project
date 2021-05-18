function General(props) {
  return (
    <form
      id="general-form"
      className="form"
      name="general"
      onSubmit={props.handleSubmit}
      onChange={props.handleChange}
    >
      <div>
        <label htmlFor="general first">First Name: </label>
        <input type="text" name="general first" id="first-name-input" />
      </div>
      <div>
        <label htmlFor="general last">Last Name: </label>
        <input type="text" name="general last" id="last-name-input" />
      </div>
      <div>
        <label htmlFor="age">Age: </label>
        <input type="text" name="general age" id="age-input" />
      </div>
      <button type="submit">save</button>
    </form>
  );
}

export default General;