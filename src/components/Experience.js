function Experience(props) {
  return (
    <form
      id="experience-form"
      className={props.hidden ? "hidden" : "form"}
      name="experience"
      onChange={props.handleChange}
      onSubmit={props.handleSubmit}
    >
      <div>
        <label htmlFor="experience company">Company: </label>
        <input type="text" name="experience company" id="company-input" />
      </div>
      <div>
        <label htmlFor="from">From: </label>
        <input type="text" name="experience from" id="from-input" />
      </div>
      <div>
        <label htmlFor="to">To: </label>
        <input type="text" name="experience to" id="to-input" />
      </div>
      <div>
        <label htmlFor="experience position">Postition: </label>
        <input type="text" name="experience position" id="postition-input" />
      </div>
      <button type="submit">save</button>
    </form>
  );
}

export default Experience;
