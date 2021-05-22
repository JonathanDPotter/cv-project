function CeeVee(props) {
  const { education, general, experience } = props;
  const name = `${general.first} ${general.last}`;
  const {bio} = general

  const displayEd = function (obj, i) {
    return (
      <div className="education" key={i}>
        <h3 className="school">{obj.school}</h3>
        <h4 className="fromTo">
          From: {obj.from} To: {obj.to}
        </h4>
        <h4 className="degree">{obj.degree}</h4>
      </div>
    );
  };

  const displayExp = function (obj, i) {
    return (
      <div className="experience" key={i}>
        <h3 className="company">{obj.company}</h3>
        <h4 className="fromTo">
          From: {obj.from} To: {obj.to}
        </h4>
        <h4 className="position">{obj.position}</h4>
      </div>
    );
  };

  return (
    <div id="cee-vee">
      <div id="name">
        <h1>{name}</h1>
        <p>{bio}</p>
      </div>
      <div id="education">
        <h2>Educatation</h2>
        <div className="list-item">
          {education.map((a, i) => displayEd(a, i))}
        </div>
      </div>
      <div id="expierience">
        <h2>Experience</h2>
        <div className="list-item">
          {experience.map((a, i) => displayExp(a, i))}
        </div>
      </div>
    </div>
  );
}

export default CeeVee;
