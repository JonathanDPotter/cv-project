function General(props) {
  return (
    <form
      id="general-form"
      className="form"
      name="general"
      onSubmit={props.handleSubmit}
    >
      <div>
        <label htmlFor="first-name">First Name: </label>
        <input type="text" name="first-name" id="first-name-input" />
      </div>
      <div>
        <label htmlFor="last-name">Last Name: </label>
        <input type="text" name="last-name" id="last-name-input" />
      </div>
      <div>
        <label htmlFor="age">Age: </label>
        <input type="text" name="age" id="age-input" />
      </div>
      <button type="submit">save</button>
    </form>
  );
}

export default General;