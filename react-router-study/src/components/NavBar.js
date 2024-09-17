import { NavLink } from 'react-router-dom';
import './NavBar.css'; // Ensure your CSS file is imported

function NavBar() {
  return (
    <div className="navbar">
      <h1>React Router DOM</h1>  
      <ul className="nav-link-container">
        {/* Each NavLink will use the `isActive` property to apply different styles */}
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/about" 
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/products" 
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            Products
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/login" 
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            Login
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
