const Stats = ({ title, brief, liveLink, githubLink, platforms, roles, technologies }) => {
  return (
    <>
      <section className="stats-container">
        <div className="title-container">
          <h2>{title}</h2>
          <article className="cta-container">
            {liveLink !== '' ? (
              <a
                href={liveLink}
                title="link to live site"
                rel="noreferrer noopener"
                target="_blank">
                live site
              </a>
            ) : (
              ''
            )}
            {githubLink !== '' ? (
              <a
                href={githubLink}
                title="link to github repo"
                rel="noreferrer noopener"
                target="_blank">
                view github
              </a>
            ) : (
              ''
            )}
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
