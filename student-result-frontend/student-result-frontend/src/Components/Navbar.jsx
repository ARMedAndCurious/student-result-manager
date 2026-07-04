import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Student Result Manager</div>
      <div className="navbar-links">
        <NavLink 
          to="/" 
          className={({ isActive }) => (isActive ? "navbar-link active" : "navbar-link")}
        >
          Home
        </NavLink>
        <NavLink 
          to="/students" 
          className={({ isActive }) => (isActive ? "navbar-link active" : "navbar-link")}
        >
          Students
        </NavLink>
      </div>
    </nav>
  );
}
