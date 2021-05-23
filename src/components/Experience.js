function Experience(props) {
  return (
    <form
      id="experience-form"
      className={props.expState.hidden ? "hidden" : "form"}
      name="experience"
      onSubmit={props.handleSubmit}
    >
      <div>
        <label htmlFor="experience company">Company: </label>
        <input
          type="text"
          name="experience company"
          id="company-input"
          onChange={props.handleChange}
          value={props.expState.company}
          required
        />
      </div>
      <div>
        <label htmlFor="from">From: </label>
        <input
          type="text"
          name="experience from"
          id="from-input"
          onChange={props.handleChange}
          value={props.expState.from}
          required
        />
      </div>
      <div>
        <label htmlFor="to">To: </label>
        <input
          type="text"
          name="experience to"
          id="to-input"
          onChange={props.handleChange}
          value={props.expState.to}
          required
        />
      </div>
      <div>
        <label htmlFor="experience position">Postition: </label>
        <input
          type="text"
          name="experience position"
          id="postition-input"
          onChange={props.handleChange}
          value={props.expState.position}
          required
        />
      </div>
      <button type="reset" onClick={props.handleCancel} name="experience">
        cancel
      </button>
      <button type="submit">save</button>
    </form>
  );
}

export default Experience;
