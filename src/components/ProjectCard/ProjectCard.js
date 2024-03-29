import { Link } from 'react-router-dom';
import ProjectType from './ProjectType';

const ProjectCard = ({thumbnail, alt, title, excerpt, type, seeMore, slug}) => {
  return (
    <article className="project-card-container">
      <Link to={`/projects/${slug}`} title={`link to ${slug} project description page`}>
        <article className="card-content-container">
          <section className="card-img-container">
            <img src={thumbnail} alt={alt} />
          </section>
          <section className="card-text-container">
            <h3>{title}</h3>
            <p>
              {excerpt} {seeMore}
            </p>
            <ProjectType type={type}/>
          </section>
        </article>
      </Link>
    </article>
  );
};

export default ProjectCard;
