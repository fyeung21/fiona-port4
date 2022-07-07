import { Link } from 'react-router-dom';
import ShortStack from './ShortStack';
import Placeholder from '../coffee-wireframes.jpg';

const ProjectCard = () => {
  return (
    <article className="project-card-container">
      <Link to={`/works/${'workSingle'}`}>
        <div>
          <section className="card-img-container">
            <img src={Placeholder} alt={'project thumbnail'} />
          </section>
          <section className="card-text-container">
            <h2>{'project title'}</h2>
            <p>
              {
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pretium, augue ac facilisis mattis, dui lorem dictum libero '
              }...see more
            </p>
            <ShortStack />
          </section>
        </div>
      </Link>
    </article>
  );
};

export default ProjectCard;
