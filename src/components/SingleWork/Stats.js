const Stats = ({ title, briefText, liveLink, githubLink, platforms, roles, technology }) => {
  return (
    <>
      <section className="stats-container">
        <div className="title-container">
          <h2>{title}</h2>
          <article className="cta-container">
            {/* if statement for live site cta */}
            <a href={liveLink}>live site</a>
            <a href={githubLink}>view github</a>
          </article>
        </div>
        <article>
          <h3>brief</h3>
          <p>{briefText}</p>
        </article>
        <article>
          <h3>platforms</h3>
          <ul>
            {platforms.map((item, id) => (
              <li key={id}>{item}</li>
            ))}
          </ul>
        </article>
        <article>
          <h3>my roles</h3>
          <ul>
            {roles.map((item, id) => (
              <li key={id}>{item}</li>
            ))}
          </ul>
        </article>
        <article>
          <h3>technologies</h3>
          <ul>
            {technology.map((item, id) => (
              <li key={id}>{item}</li>
            ))}
          </ul>
        </article>
      </section>
    </>
  );
};

export default Stats;