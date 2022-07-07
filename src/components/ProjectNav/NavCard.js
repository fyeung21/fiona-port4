import { Link } from 'react-router-dom';

const NavCard = ({thumbnail, alt, projectTitle}) => {
  return (
    <Link to={`/work/${'page-id'}`}>
      <article className="nav-card-container">
        <img src={thumbnail} alt={alt} />
        <h3>{projectTitle}</h3>
      </article>
    </Link>
  );
};

export default NavCard;
