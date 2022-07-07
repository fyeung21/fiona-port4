import { Link } from 'react-router-dom';

const NavCard = ({ thumbnail, alt, projectTitle }) => {
  return (
    <Link to={`/work/${'page-id'}`}>
      <article className="nav-card-container">
        <div className="img-container">
          <img src={thumbnail} alt={alt} />
        </div>
        <h3>{projectTitle}</h3>
      </article>
    </Link>
  );
};

export default NavCard;
