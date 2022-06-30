import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <>
        <div class="logo">
            <h1><NavLink to="/">fiona.</NavLink></h1>
        </div>
        <nav>
            <ul>
                <li><NavLink to="/about">about</NavLink></li>
            </ul>
        </nav>
        </>
    )
}

export default Header;