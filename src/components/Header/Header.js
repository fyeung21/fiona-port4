import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
    <a className="skip-link" href="#main">Skip to content</a>
      <div className="header-container">
        <div className="logo">
          <NavLink to="/">
            <h1 title="link to fiona's homepage">fiona.</h1>
          </NavLink>
        </div>
        <nav>
          <NavLink to="/about" title="link to about me">about me</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
