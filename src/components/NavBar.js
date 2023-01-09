import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navBar">
      <ul>
        <li className="navLink">
          <NavLink to="/" className="navLink">
            Home
          </NavLink>
        </li>
        <li className="navLink">
          <NavLink to="/Profile" className="navLink">
            Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
