function CeeVee(props) {
  const { name, description, education} = props;
  const display = function (obj, i) {

    return (
      <div className="education" key={i}>
        <h3 className="school">{obj.school}</h3>
        <h4 className="fromTo">From: {obj.from} To: {obj.to}</h4>
        <h4 className="degree">{obj.degree}</h4>
      </div>
    )
  };

  return (
    <div id="cee-vee">
      <div id="name">
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
      <div id="education">
        <h2>Educatation</h2>
        <div className="list-item">
          {education.map((a, i) => display(a, i))}
        </div>
      </div>
    </div>
  );
}

export default CeeVee;
