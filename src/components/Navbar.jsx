import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar navbar-dark bg-dark">
      <div className="container">
        <NavLink className="btn btn-outline-light" to="/">
          Inicio
        </NavLink>
        <NavLink className="btn btn-outline-light" to="/contacto">
          Contacto
        </NavLink>
        <NavLink className="btn btn-outline-light" to="/blog">
          Blog
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
