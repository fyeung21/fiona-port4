
const Stats = ({briefText, liveLink, githubLink, platform, roles, technology}) => {
    return (
        <>
        <section class="stats-container">
            <h2>{"Project Title"}</h2>
            <article>
                <h3>brief</h3>
                <p>{briefText}</p>
            </article>
            <article className="cta-container">
                {/* if statement for live site cta */}
                <a href={liveLink}>live site</a>
                <a href={githubLink}>view github</a>
            </article>
            <article>
                <h3>platforms</h3>
                <ul>
                    {platform.map((item) => (
                        <li>{item}</li>
                    ))}
                </ul>
            </article>
            <article>
                <h3>my roles</h3>
                {/* <ul>
                    {roles.map((item) => (
                        <li>{item}</li>
                    ))}
                </ul> */}
            </article>
            <article>
                <h3>technologies</h3>
                <ul>
                    {technology.map((item) => (
                        <li>{item}</li>
                    ))}
                </ul>
            </article>
        </section>
        </>
    )
}

export default Stats;