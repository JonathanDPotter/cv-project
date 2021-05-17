function CeeVee(props) {
  const { name, description, education, general, experience } = props;
  
  const displayEd = function (obj, i) {

    return (
      <div className="education" key={i}>
        <h3 className="school">{obj.school}</h3>
        <h4 className="fromTo">From: {obj.from} To: {obj.to}</h4>
        <h4 className="degree">{obj.degree}</h4>
      </div>
    )
  };

   const displayGen = function (obj, i) {
     return (
       <div className="general" key={i}>
         <h3 className="firstName">{obj.firstName}</h3>
         <h4 className="lastName">{obj.lastName}</h4>
         <h4 className="age">{obj.age}</h4>
       </div>
     );
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
          {education.map((a, i) => displayEd(a, i))}
        </div>
      </div>
      <div id="general">
        <h2>General</h2>
        <div className="list-item">
          {general.map((a, i) => displayGen(a, i))}
        </div>
      </div>
    </div>
  );
}

export default CeeVee;
