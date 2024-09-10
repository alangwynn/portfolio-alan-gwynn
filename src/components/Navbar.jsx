import { Links } from "./Links";

export const Navbar = () => {
  return (
    <nav id="desktop-nav">
      <div className="logo">Alan Gwynn</div>
      <div>
        <ul className="nav-links">
          <Links />
        </ul>
      </div>
    </nav>
  );
};
