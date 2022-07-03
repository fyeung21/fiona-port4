import { Link } from 'react-router-dom';

const NavCard = () => {
  return (
    <article className='navcard-container'>
      <Link to={`/work/${'page-id'}`}>
        <img src={''} alt={''} />
        <h3>{'Project Title'}</h3>
      </Link>
    </article>
  );
};

export default NavCard;
