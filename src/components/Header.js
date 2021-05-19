function Header(props) {
  return (
    <header>
      <div id="content-box">
        <h1>CV-Generator</h1>
        <button
          id="update-general"
          name="general"
          className="head-btn"
          onClick={props.hideUnhide}
        >
          Update General Information
        </button>
        <button
          id="add-education"
          name="education"
          className="head-btn"
          onClick={props.hideUnhide}
        >
          Add Education
        </button>
        <button
          id="add-experience"
          name="experience"
          className="head-btn"
          onClick={props.hideUnhide}
        >
          Add Experience
        </button>
      </div>
    </header>
  );
}

export default Header;
