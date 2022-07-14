import { Link } from 'react-router-dom';
import ProjectType from './ProjectType';

const ProjectCard = ({thumbnail, alt, title, excerpt, type, slug}) => {
  return (
    <article className="project-card-container">
      <Link to={`/projects/${slug}`} title={`link to ${slug} project description page`}>
        <div>
          <section className="card-img-container">
            <img src={thumbnail} alt={alt} />
          </section>
          <section className="card-text-container">
            <h2>{title}</h2>
            <p>
              {excerpt} ...see more
            </p>
            <ProjectType type={type}/>
          </section>
        </div>
      </Link>
    </article>
  );
};

export default ProjectCard;
