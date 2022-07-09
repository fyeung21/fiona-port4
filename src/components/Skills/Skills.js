
const Skills = ({ frontEnd, backEnd, mobile, toolSystems }) => {

  return (
    <section className="skills-container">
      <h2>my tool-kit</h2>

      <div className="flex-container">
      {frontEnd.length !== 0 ? (
        <article>
          <h3>front-end</h3>
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
          <h3>back-end</h3>
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
          <h3>mobile</h3>
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
          <h3>{'tools & systems'}</h3>
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
