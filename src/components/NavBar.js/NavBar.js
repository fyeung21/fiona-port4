import { NavLink } from 'react-router-dom';
import Brackets from '../Icons/Brackets';
import Send from '../Icons/Send';
import User from '../Icons/User';

const NavBar = () => {
  return (
    <section className="bottom-nav-bar">
      <nav>
        <ul>
          <li title="Go to my projects page">
            <NavLink to="/">
              <Brackets />
              <p>projects</p>
            </NavLink>
          </li>
          <li title="Go to my about page">
            <NavLink to="/about">
              <User />
              <p>about</p>
            </NavLink>
          </li>
          <li title="Click for ways to contact me">
            <Send />
            <p>contact</p>
          </li>
        </ul>
      </nav>
    </section>
  );
};
export default NavBar;
