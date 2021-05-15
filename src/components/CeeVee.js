function CeeVee(props) {
  const education = function (a, i) {
    return (
      <div className="education" key={i}>
        <h3 className="school">{a}1</h3>
        <h4 className="fromTo">2</h4>
        <h4 className="degree">3</h4>
      </div>
    )
  };

  return (
    <div id="cee-vee">
      <div id="name">
        <h1>{props.name}</h1>
        <p>{props.description}</p>
      </div>
      <div id="education">
        <h2>Educatation</h2>
        <div className="list-item">
          {props.education.map((a, i) => education(a, i))}
        </div>
      </div>
    </div>
  );
}

export default CeeVee;
