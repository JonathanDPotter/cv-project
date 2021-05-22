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
          General
        </button>
        <button
          id="add-education"
          name="education"
          className="head-btn"
          onClick={props.hideUnhide}
        >
          Education
        </button>
        <button
          id="add-experience"
          name="experience"
          className="head-btn"
          onClick={props.hideUnhide}
        >
          Experience
        </button>
      </div>
    </header>
  );
}

export default Header;
