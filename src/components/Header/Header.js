import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="header-container">
        <div className="logo">
          <NavLink to="/">
            <h1 title="link to fiona's homepage">fiona.</h1>
          </NavLink>
        </div>
        <nav>
          <ul>
            <li>
              <NavLink to="/" title="navigate to projects page">
                projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" title="navigate to about me page">
                about
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
