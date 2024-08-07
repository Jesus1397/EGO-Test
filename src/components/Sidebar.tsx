import React from "react";
import { Link } from "react-router-dom";
import "../styles/Sidebar.css";

const Sidebar: React.FC<{ toggled: boolean; onClose: () => void }> = ({
  toggled,
  onClose,
}) => {
  return (
    <div className={`sidebar ${toggled ? "open" : ""}`}>
      <button className="close-btn" onClick={onClose}>
        Cerrar
        <img
          src="/cerrar.svg"
          alt="Logo"
          width={15}
          height={15}
          className="d-inline-block ms-2"
        />
      </button>
      <br />
      <ul>
        <li>
          <Link to="/models">Modelos</Link>
        </li>
        <li>
          <Link to="/models">Servicios y Accesorios</Link>
        </li>
        <li>
          <Link to="/models">Financiación</Link>
        </li>
        <li>
          <Link to="/models">Reviews y Comunidad</Link>
        </li>
        <hr className="divider" />
        <li>
          <Link to="/models">Toyota Mobility Service</Link>
        </li>
        <li>
          <Link to="/models">Toyota Gazoo Racing</Link>
        </li>
        <li>
          <Link to="/models">Toyota Híbridos</Link>
        </li>
        <hr className="divider" />
        <li>
          <Link to="/models">Concesionarios</Link>
        </li>
        <li>
          <Link to="/models">Test Drive</Link>
        </li>
        <li>
          <Link to="/models">Contacto</Link>
        </li>
      </ul>
      <ul className="extras">
        <li>
          <Link to="/models">Actividades</Link>
        </li>
        <li>
          <Link to="/car/1">Servicios al Cliente</Link>
        </li>
        <li>
          <Link to="/models">Ventas Especiales</Link>
        </li>
        <li>
          <Link to="/models">Innovación</Link>
        </li>
        <li>
          <Link to="/models">Prensa</Link>
        </li>
        <li>
          <Link to="/models">Acerca de...</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
