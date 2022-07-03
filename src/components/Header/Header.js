import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div class="logo">
          <NavLink to="/">
            <h1>fiona.</h1>
          </NavLink>
        </div>
        <nav>
          <NavLink to="/about">about me</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
