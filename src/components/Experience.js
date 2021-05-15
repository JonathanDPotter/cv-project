function Experience() {
  return (
    <form id="experience-form" className="hidden form">
      <div>
        <label htmlFor="company">Company: </label>
        <input type="text" name="company" id="company-input" />
      </div>
      <div>
        <label htmlFor="postition">Postition: </label>
        <input type="text" name="postition" id="postition-input" />
      </div>
      <div>
        <label htmlFor="from">From: </label>
        <input type="text" name="from" id="from-input" />
      </div>
      <div>
        <label htmlFor="to">To: </label>
        <input type="text" name="to" id="to-input" />
      </div>
      <button type="submit">save</button>
    </form>
  );
}

export default Experience;
