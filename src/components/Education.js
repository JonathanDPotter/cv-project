function Education() {
  return (
    <form id="education-form" class="form">
      <div>
        <label htmlFor="school">School: </label>
        <input type="text" name="school" id="school-input" />
      </div>
      <div>
        <label htmlFor="from">From: </label>
        <input type="text" name="from" id="from-input" />
      </div>
      <div>
        <label htmlFor="to">To: </label>
        <input type="text" name="to" id="to-input" />
      </div>
      <div>
        <label htmlFor="degree">Degree: </label>
        <input type="text" name="degree" id="degree-input" />
      </div>
      <button type="submit">save</button>
    </form>
  );
}

export default Education