import { NavLink } from "react-router-dom"

export const Footer = () => {
  return (
    <footer>
      <nav>
        <div className="nav-links-container">
          <ul className="nav-links">
            <li><NavLink onClick={() => location.href = '#about'}>About</NavLink></li>
            <li><NavLink onClick={() => location.href = '#experience'}>Experience</NavLink></li>
            <li><NavLink onClick={() => location.href = '#projects'}>Projects</NavLink></li>
            <li><NavLink onClick={() => location.href = '#contact'}>Contact</NavLink></li>
          </ul>
        </div>
      </nav>
      <p>2024 Alan Gwynn</p>
    </footer>
  )
}
