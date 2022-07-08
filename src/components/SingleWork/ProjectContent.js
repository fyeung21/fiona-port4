
const ProjectContent = ({ content }) => {
  return (
    <>
      <section className="project-content-container">
        {content.map((item, id) => (
            <article key={id}>
            {item.heading !== '' ? <h3>{item.heading}</h3> : ''}
            <section dangerouslySetInnerHTML={{ __html: item.content }}></section>
            </article>
        ))}
      </section>
    </>
  );
};

export default ProjectContent;