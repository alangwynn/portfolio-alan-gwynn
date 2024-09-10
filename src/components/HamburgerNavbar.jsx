import { Links } from "./Links";

export const HamburgerNavbar = () => {

    const toggleMenu = () => {
        const menu = document.querySelector('.menu-links');
        const icon = document.querySelector('.hamburger-icon');
        menu.classList.toggle('open');
        icon.classList.toggle('open');
    }

  return (
    <nav id="hamburger-nav">
      <div className="logo">Alan Gwynn</div>
      <div className="hamburger-menu">
        <div className="hamburger-icon" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="menu-links">
          <Links />
        </div>
      </div>
    </nav>
  );
};
