const Stats = ({ title, brief, liveLink, githubLink, platforms, roles, technologies }) => {
  return (
    <>
      <section className="stats-container">
        <div className="title-container">
          <h2>{title}</h2>
          <article className="cta-container">
            {/* if statement for live site cta */}
            <a href={liveLink} title="link to live site">live site</a>
            <a href={githubLink} title="link to github repo">view github</a>
          </article>
        </div>
        <article>
          <h3>brief</h3>
          <p>{brief}</p>
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
            {technologies.map((item, id) => (
              <li key={id}>{item}</li>
            ))}
          </ul>
        </article>
      </section>
    </>
  );
};

export default Stats;