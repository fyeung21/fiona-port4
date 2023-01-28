
const Skills = ({ frontEnd, backEnd, mobile, toolSystems }) => {

  return (
    <section className="skills-container">
      <h3>my tool-kit</h3>

      <div className="flex-container">
      {frontEnd.length !== 0 ? (
        <article>
          <h4>front-end</h4>
          <ul>
            {frontEnd.map((item, id) => (
              <li key={id}>{item}</li>
            ))}
          </ul>
        </article>
      ) : (
        ''
      )}
      
      {backEnd.length !== 0 ? (
        <article>
          <h4>back-end</h4>
          <ul>
            {backEnd.map((item, id) => (
              <li key={id}>{item}</li>
            ))}
          </ul>
        </article>
      ) : (
        ''
      )}

      {mobile.length !== 0 ? (
        <article>
          <h4>mobile</h4>
          <ul>
            {mobile.map((item, id) => (
              <li key={id}>{item}</li>
            ))}
          </ul>
        </article>
      ) : (
        ''
      )}

      {toolSystems.length !== 0 ? (
        <article>
          <h4>{'tools & systems'}</h4>
          <ul>
            {toolSystems.map((item, id) => (
              <li key={id}>{item}</li>
            ))}
          </ul>
        </article>
      ) : (
        ''
      )}
      </div>

    </section>
  );
};

export default Skills;
