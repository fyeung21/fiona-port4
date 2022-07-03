
const ProjectCard = () => {
    return (
        <article>
            <div className='card-img-container'>
                <img src={''} alt={"project thumbnail"} />
            </div>
            <div className='card-text-container'>
                <h2>{"project title"}</h2>
                <p>{"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pretium, augue ac facilisis mattis, dui lorem dictum libero, quis imperdiet lorem dui sit amet lorem."}</p>
                <p>{"HTML CSS"}</p>
            </div>
        </article>
    )
}

export default ProjectCard;