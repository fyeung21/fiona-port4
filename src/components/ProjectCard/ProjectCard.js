import { Link } from 'react-router-dom';
import ShortStack from './ShortStack';

const ProjectCard = ({thumbnail, alt, title, excerpt, type}) => {
  return (
    <article className="project-card-container">
      <Link to={`/works/${'workSingle'}`}>
        <div>
          <section className="card-img-container">
            <img src={thumbnail} alt={alt} />
          </section>
          <section className="card-text-container">
            <h2>{title}</h2>
            <p>
              {excerpt} ...see more
            </p>
            <ShortStack type={type}/>
          </section>
        </div>
      </Link>
    </article>
  );
};

export default ProjectCard;
