import { NavLink } from "react-router-dom";

export const Cabecera = () => {
  return (
    <header className="cabecera row align-items-center">
      <h1 className="col">Ejemplo cabecera</h1>
      <nav className="col text-right">
        <ul className="list-unstyled list-inline">
          <li className="list-inline-item">
            <NavLink to="/listado" activeClassName="activo">
              Listado
            </NavLink>
          </li>
          <li className="list-inline-item">
            <NavLink to="/nuevo" activeClassName="activo">
              Nuevo ítem
            </NavLink>
          </li>
          <li className="list-inline-item">
            <NavLink to="/contacto" activeClassName="activo">
              Contáctanos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
