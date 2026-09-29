import { NavLink } from "react-router-dom";
import estilos from "./Nav.module.css";

const Nav = () => {
  return (
    <ul className={estilos.nav}>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? `${estilos.link} ${estilos.active}` : estilos.link
          }
          end
        >
          Inicio
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/productos"
          className={({ isActive }) =>
            isActive ? `${estilos.link} ${estilos.active}` : estilos.link
          }
        >
          Productos
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/carrito"
          className={({ isActive }) =>
            isActive ? `${estilos.link} ${estilos.active}` : estilos.link
          }
        >
          Carrito
        </NavLink>
      </li>
    </ul>
  );
};

export default Nav;