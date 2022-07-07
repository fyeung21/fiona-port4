import { Link } from 'react-router-dom';

const NavCard = () => {
  return (
    <Link to={`/work/${'page-id'}`}>
      <article className="nav-card-container">
        <img src={''} alt={''} />
        <h3>{'Project Title'}</h3>
      </article>
    </Link>
  );
};

export default NavCard;
