function Education() {
  return (
    <form id="educationi-form" class="form">
      <div>
        <label htmlFor="undergraduate">Undergraduate: </label>
        <input type="text" name="undergraduate" id="undergraduate-input" />
      </div>
      <div>
        <label htmlFor="post-graduate">Post-Graduate: </label>
        <input type="text" name="post-graduate" id="post-graduate-input" />
      </div>
      <div>
        <label htmlFor="other">Other: </label>
        <input type="text" name="other" id="other-input" />
      </div>
      <button type="submit">save</button>
    </form>
  );
}

export default Education