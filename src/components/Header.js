function Header() {
  return (
    <header>
      <div id="content-box">
        <h1>CV-Generator</h1>
        <button id="update-general" name="update general" className="head-btn">
          Update General Information
        </button>
        <button id="add-education" name="add education" className="head-btn">
          Add Education
        </button>
        <button id="add-experience" name="add experience" className="head-btn">
          Add Experience
        </button>
      </div>
    </header>
  );
}

export default Header;
