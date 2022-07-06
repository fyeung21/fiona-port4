
const Stats = () => {
    return (
        <>
        <section class="stats-container">
            <h2>{"Project Title"}</h2>
            <article>
                <h3>brief</h3>
                <p>{"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pretium, augue ac facilisis mattis, dui lorem dictum libero, quis imperdiet lorem dui sit amet lorem. Aliquam erat volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In rutrum orci eros, at tempor urna accumsan imperdiet."}</p>
            </article>
            <article className="cta-container">
                {/* if statement for live site cta */}
                <a href={""}>live site</a>
                <a href={""}>view github</a>
            </article>
            <article>
                <h3>platforms</h3>
                <ul>
                    <li>{"web"}</li>
                    <li>{"mobile"}</li>
                </ul>
            </article>
            <article>
                <h3>my roles</h3>
                <ul>
                    <li>{"UX Planning"}</li>
                    <li>{"Development"}</li>
                </ul>
            </article>
            <article>
                <h3>technologies</h3>
                <ul>
                    <li>{"React"}</li>
                    <li>{"HTML/CSS"}</li>
                    <li>{"JS"}</li>
                </ul>
            </article>
        </section>
        </>
    )
}

export default Stats;