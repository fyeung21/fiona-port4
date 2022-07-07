import { Link } from 'react-router-dom';
import ShortStack from './ShortStack';
import Placeholder from '../coffee-wireframes.jpg';

const ProjectCard = () => {
  return (
    <article className='project-card-container'>
      <div className="card-img-container">
        <img src={Placeholder} alt={'project thumbnail'} />
      </div>
      <div className="card-text-container">
        <h2>{'project title'}</h2>
        <p>
          {
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pretium, augue ac facilisis mattis, dui lorem dictum libero '
          }
          <Link to={`/works/${'workSingle'}`}>...more</Link>
        </p>
        <ShortStack />
      </div>
    </article>
  );
};

export default ProjectCard;
