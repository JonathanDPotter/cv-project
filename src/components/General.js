const General = function (props) {
  return (
    <form
      id="general-form"
      className={props.genState.hidden === true ? "hidden" : "form"}
      name="general"
      onSubmit={props.handleSubmit}
    >
      <div>
        <label htmlFor="general first">First Name: </label>
        <input
          type="text"
          name="general first"
          id="first-name-input"
          onChange={props.handleChange}
          value={props.genState.first}
        />
      </div>
      <div>
        <label htmlFor="general last">Last Name: </label>
        <input
          type="text"
          name="general last"
          id="last-name-input"
          onChange={props.handleChange}
          value={props.genState.last}
        />
      </div>
      <div>
        <label htmlFor="general bio">bio: </label>
        <textarea
          name="general bio"
          id="bio-input"
          onChange={props.handleChange}
          value={props.genState.bio}
        />
      </div>
      <button type="reset" onClick={props.handleCancel} name="general">
        cancel
      </button>
      <button type="submit">save</button>
    </form>
  );
};

export default General;
