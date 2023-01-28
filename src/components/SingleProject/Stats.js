const Stats = ({ title, brief, liveLink, githubLink, platforms, technologies }) => {
  let techArray = technologies.join(', ');
  return (
    <>
      <section className="stats-container">
        <section className="primary-summary-container">
          <article className="title-container">
            <h2>{title}</h2>
            <p>{brief}</p>
          </article>
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
        </section>
        <section className="secondary-summary-container">
          <article>
            <h4>platforms</h4>
            <ul>
              {platforms.map((item, id) => (
                <li key={id}>{item}</li>
              ))}
            </ul>
            <ul>
              {' '}
              {/* Platform List as Row */}
              {platforms.map((item, id) => (
                <li key={id}>{item}</li>
              ))}
            </ul>
          </article>
          <article>
            <h4>technologies</h4>
            <ul>
              {technologies.map((item, id) => (
                <li key={id}>{item}</li>
              ))}
            </ul>
            <ul>
              {' '}
              {/* Tech List as Row */}
              {technologies.map((item, id) => (
                <li key={id}>{item}</li>
              ))}
            </ul>
          </article>
        </section>
      </section>
    </>
  );
};

export default Stats;
