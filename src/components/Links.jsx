import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";

export const Links = () => {
  return (
    <>
      <li>
        <NavLink onClick={() => location.href = '#about'}>About</NavLink>
      </li>
      <li>
        <NavLink onClick={() => location.href = '#experience'}>Experience</NavLink>
      </li>
      <li>
        <NavLink onClick={() => location.href = '#projects'}>Projects</NavLink>
      </li>
      <li>
        <NavLink onClick={() => location.href = '#contact'}>Contact</NavLink>
      </li>
    </>
  );
};

Links.propTypes = {
    toggleMenu: PropTypes.func,
}
